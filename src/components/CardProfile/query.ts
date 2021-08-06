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
