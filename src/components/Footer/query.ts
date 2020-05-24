import gql from 'graphql-tag';

export const STATS_SHOW_LIST = gql`
  query Statics {
    characters {
      info {
        count
      }
    }
    locations {
      info {
        count
      }
    }
    episodes {
      info {
        count
      }
    }
  }
`;
