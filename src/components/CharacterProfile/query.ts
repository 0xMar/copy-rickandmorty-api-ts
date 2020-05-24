import gql from 'graphql-tag';

export const QUERY_CHARACTER_PROFILE = gql`
  query CharacterProfile($name: String) {
    characters(filter: { name: $name }) {
      results {
        id
        name
        image
      }
    }
  }
`;
