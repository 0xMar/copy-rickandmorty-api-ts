import React from 'react';
import CharacterList, { OwnProps } from './CharacterList';

const CharacterListContainer = ({ children }: OwnProps) => {
  return <CharacterList>{children}</CharacterList>;
};

export default CharacterListContainer;
