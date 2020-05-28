import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  padding: 4.5rem 0px;
  align-items: center;
  justify-content: center;
  background: #202329;
  min-height: calc(50vh - 60px);
  @media (max-width: 40.625em) {
    padding: 1.5rem;
  }
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1920px;
`;
