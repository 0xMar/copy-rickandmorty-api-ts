import React from 'react';
import { CharacterListQuery } from '../../generated/graphql';
import { Card, ImageWrapper, ContentWrapper, Section } from './styles';
interface Props {
  data: CharacterListQuery;
}

const API = 'https://rickandmortyapi.com/api';

const CardProfile: React.FC<Props> = ({ data }: Props) => {
  const result = data?.characters?.results || [];
  try {
    return (
      <>
        {result.slice(0, 6).map((character) => (
          <Card key={character?.id || ''}>
            <ImageWrapper>
              <img src={character?.image || ''} alt={character?.name || ''} />
            </ImageWrapper>
            <ContentWrapper state={character?.status || ''}>
              <Section>
                <a href={`${API}/character/${character?.id}` || ''}>
                  <h2>{character?.name || ''}</h2>
                </a>
                <span>
                  <span></span>
                  {character?.status || ''} - {character?.species || ''}
                </span>
              </Section>
              <Section>
                <span>Last known location:</span>
                <a href={`${API}/location/${character?.location}` || ''}>
                  {character?.location?.name || ''}
                </a>
              </Section>
              <Section>
                <span>First seen in:</span>
                <a
                  href={
                    character?.episode
                      ? `${API}/episode/${character?.episode[0]?.id}`
                      : ''
                  }
                >
                  {character?.episode ? character?.episode[0]?.name : ''}
                </a>
              </Section>
            </ContentWrapper>
          </Card>
        ))}
      </>
    );
  } catch (error) {
    return null;
  }
};

export default CardProfile;
