import React, { ReactElement } from 'react';
import { Wrapper, Inner } from './styles';
export interface OwnProps {
  children: ReactElement;
}

const CharacterList: React.FC<OwnProps> = ({ children }: OwnProps) => (
  <Wrapper>
    <Inner>{children}</Inner>
  </Wrapper>
);

export default CharacterList;
