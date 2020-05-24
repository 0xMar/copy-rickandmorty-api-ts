import React from 'react';
import { CharacterListQuery } from '../../generated/graphql';

import { Card, ImageWrapper, ContentWrapper, Section } from './styles';
interface Props {
  data: CharacterListQuery;
}

const CardProfile = ({ data }: Props) => {
  const result = data?.characters?.results || [];
  try {
    return (
      <>
        {result.map((character) => (
          <Card key={character?.id || ''}>
            {console.log(character?.episode?.length)}
            <ImageWrapper>
              <img src={character?.image || ''} />
            </ImageWrapper>
            <ContentWrapper state={character?.status || ''}>
              <Section>
                <a href={character?.name || ''}>
                  <h2>{character?.name || ''}</h2>
                </a>
                <span>
                  <span></span>
                  {character?.status || ''} - {character?.species || ''}
                </span>
              </Section>
              <Section>
                <span>Last known location:</span>
                <a href="">{character?.location?.name || ''}</a>
              </Section>
              <Section>
                <span>First seen in:</span>
                <a href="">
                  {character?.episode ? character?.episode[0]?.name : ''}
                  {/* {character?.episode
                    ? character?.episode?.length > 1
                      ? character?.episode[character.episode?.length - 1]?.name
                      : character?.episode[0]?.name
                    : ''} */}
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
