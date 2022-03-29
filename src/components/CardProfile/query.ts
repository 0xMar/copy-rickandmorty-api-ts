import gql from 'graphql-tag';

export const QUERY_CHARACTER_LIST = gql`
  query CharacterList {
    characters {
      results {
        id
        name
        status
        species
        image
        location {
          id
          name
        }
        episode {
          name
          id
        }
      }
    }
  }
`;
