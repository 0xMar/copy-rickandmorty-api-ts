import React from 'react';
import styled from 'styled-components';
import CharacterList from './components/CharacterList';
import CardProfile from './components/CardProfile';
import Hero from './components/Hero/Hero';
import Header from './components/Header';
import Footer from './components/Footer';
import { GlobalStyle } from './components/Styles/globalStyles';

const Container = styled.main`
  padding-top: 2px;
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Container>
        <Hero />
        <CharacterList>
          <CardProfile />
        </CharacterList>
      </Container>
      <Footer />
    </>
  );
};
export default App;
