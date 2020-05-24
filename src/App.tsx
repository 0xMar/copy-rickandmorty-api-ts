import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CharacterList from './components/CharacterList';
import CharacterProfile from './components/CharacterProfile';
import SearchCharacter from './components/SearchCharacter';
import CardProfile from './components/CardProfile';
import Hero from './components/Hero';
import Header from './components/Header';
import Footer from './components/Footer';

import styled from 'styled-components';
import { GlobalStyle } from './globalStyles';

const Container = styled.main`
  background: rgb(255, 255, 255) none repeat scroll 0% 0%;
`;

const App = () => {
  // const [searchInput, setSearchInput] = useState('');
  // const handleInputChange = useCallback((name) => {
  //   if (name.length > 3) {
  //     setSearchInput(name);
  //   }
  // }, []);
  return (
    <>
      <Header />
      <Container>
        <Hero />
        <CharacterList>
          <CardProfile />
        </CharacterList>
      </Container>
      <Footer />
      <GlobalStyle />
    </>
  );
};
export default App;
