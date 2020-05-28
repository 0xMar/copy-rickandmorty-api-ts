import React from 'react';
import styled from 'styled-components';
import CharacterList from './components/CharacterList';
import CardProfile from './components/CardProfile';
import Hero from './components/Hero/Hero';
import Header from './components/Header';
import Footer from './components/Footer';

const Container = styled.main`
  padding-top: 2px;
`;

const App: React.FC = () => {
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
    </>
  );
};
export default App;
