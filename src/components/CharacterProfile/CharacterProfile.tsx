import React from 'react';
import { CharacterProfileQuery } from '../../generated/graphql';
interface Props {
  data: CharacterProfileQuery;
}

const CharacterProfile = ({ data }: Props) => {
  const result = data?.characters?.results || [];
  try {
    return (
      <>
        {result.map((character) => (
          <div key={character?.id || ''}>
            <h1>{character?.name}</h1>
            <img
              src={character?.image || ''}
              alt={character?.name || ''}
              loading="lazy"
            />
          </div>
        ))}
      </>
    );
  } catch (error) {
    return null;
  }
};

export default CharacterProfile;
