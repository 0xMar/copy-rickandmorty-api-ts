import React from 'react';
import { render } from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import App from './App';
import { GlobalStyle } from './components/Styles/globalStyles';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
});

render(
  <ApolloProvider client={client}>
    <ApolloHooksProvider client={client}>
      <GlobalStyle />
      <App />
    </ApolloHooksProvider>
  </ApolloProvider>,
  document.getElementById('app'),
);
