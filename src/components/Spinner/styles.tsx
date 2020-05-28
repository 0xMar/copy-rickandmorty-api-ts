import styled from 'styled-components';
import { animation } from '../Styles/Animations';

export const SpinnerRotate = styled.div`
  ${animation};
  width: 30px;
  height: 30px;
  & svg {
    width: 100%;
    height: 100%;
    fill: #ff9800;
  }
`;
