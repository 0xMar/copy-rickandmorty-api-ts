import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  ApolloProvider,
} from '@apollo/client';
import App from './App';

const container = document.getElementById('app');

const root = createRoot(container!);

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
);
