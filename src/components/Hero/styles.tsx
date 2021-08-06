import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: calc(50vh - 60px);
  text-align: center;
  position: relative;
  @media (max-width: 40.625em) {
    padding: 0px 1.25rem;
  }
`;

export const Title = styled.h1`
  margin: 0px;
  font-size: 5.625rem;
  font-weight: 900;
  border: none;
  color: #202329;
  z-index: 1;
  @media (max-width: 55.625em) {
    font-size: 3.75rem;
  }
  @media (max-width: 40.625em) {
    font-size: 3.125rem;
  }
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
