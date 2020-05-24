import styled from 'styled-components';

export const Wrapper = styled.section`
  height: calc(-60px + 50vh);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  text-align: center;
`;

export const Title = styled.h1`
  margin: 0px;
  font-size: 5rem;
  font-weight: 900;
  border: medium none;
  color: rgb(32, 35, 41);
  z-index: 1;
`;

export const Image = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  & svg {
    width: 100%;
    height: 100%;
    fill: rgb(245, 245, 245);
  }
`;
