import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
import { QueryResult } from '@apollo/react-common';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  // Upload: any;
};

export type Query = {
  __typename?: 'Query';
  /** Get a specific character by ID */
  character?: Maybe<Character>;
  /** Get the list of all characters */
  characters?: Maybe<Characters>;
  /** Get a specific locations by ID */
  location?: Maybe<Location>;
  /** Get the list of all locations */
  locations?: Maybe<Locations>;
  /** Get a specific episode by ID */
  episode?: Maybe<Episode>;
  /** Get the list of all episodes */
  episodes?: Maybe<Episodes>;
};

export type QueryCharacterArgs = {
  id?: Maybe<Scalars['ID']>;
};

export type QueryCharactersArgs = {
  page?: Maybe<Scalars['Int']>;
  filter?: Maybe<FilterCharacter>;
};

export type QueryLocationArgs = {
  id?: Maybe<Scalars['ID']>;
};

export type QueryLocationsArgs = {
  page?: Maybe<Scalars['Int']>;
  filter?: Maybe<FilterLocation>;
};

export type QueryEpisodeArgs = {
  id?: Maybe<Scalars['ID']>;
};

export type QueryEpisodesArgs = {
  page?: Maybe<Scalars['Int']>;
  filter?: Maybe<FilterEpisode>;
};

export type Character = {
  __typename?: 'Character';
  /** The id of the character. */
  id?: Maybe<Scalars['ID']>;
  /** The name of the character. */
  name?: Maybe<Scalars['String']>;
  /** The status of the character ('Alive', 'Dead' or 'unknown'). */
  status?: Maybe<Scalars['String']>;
  /** The species of the character. */
  species?: Maybe<Scalars['String']>;
  /** The type or subspecies of the character. */
  type?: Maybe<Scalars['String']>;
  /** The gender of the character ('Female', 'Male', 'Genderless' or 'unknown'). */
  gender?: Maybe<Scalars['String']>;
  /** The character's origin location */
  origin?: Maybe<Location>;
  /** The character's last known location */
  location?: Maybe<Location>;
  /**
   * Link to the character's image.
   * All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.
   */
  image?: Maybe<Scalars['String']>;
  /** Episodes in which this character appeared. */
  episode?: Maybe<Array<Maybe<Episode>>>;
  /** Time at which the character was created in the database. */
  created?: Maybe<Scalars['String']>;
};

export type Location = {
  __typename?: 'Location';
  /** The id of the location. */
  id?: Maybe<Scalars['ID']>;
  /** The name of the location. */
  name?: Maybe<Scalars['String']>;
  /** The type of the location. */
  type?: Maybe<Scalars['String']>;
  /** The dimension in which the location is located. */
  dimension?: Maybe<Scalars['String']>;
  /** List of characters who have been last seen in the location. */
  residents?: Maybe<Array<Maybe<Character>>>;
  /** Time at which the location was created in the database. */
  created?: Maybe<Scalars['String']>;
};

export type Episode = {
  __typename?: 'Episode';
  /** The id of the episode. */
  id?: Maybe<Scalars['ID']>;
  /** The name of the episode. */
  name?: Maybe<Scalars['String']>;
  /** The air date of the episode. */
  air_date?: Maybe<Scalars['String']>;
  /** The code of the episode. */
  episode?: Maybe<Scalars['String']>;
  /** List of characters who have been seen in the episode. */
  characters?: Maybe<Array<Maybe<Character>>>;
  /** Time at which the episode was created in the database. */
  created?: Maybe<Scalars['String']>;
};

export type FilterCharacter = {
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  species?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
};

export type Characters = {
  __typename?: 'Characters';
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Character>>>;
};

export type Info = {
  __typename?: 'Info';
  /** The length of the response. */
  count?: Maybe<Scalars['Int']>;
  /** The amount of pages. */
  pages?: Maybe<Scalars['Int']>;
  /** Number of the next page (if it exists) */
  next?: Maybe<Scalars['Int']>;
  /** Number of the previous page (if it exists) */
  prev?: Maybe<Scalars['Int']>;
};

export type FilterLocation = {
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  dimension?: Maybe<Scalars['String']>;
};

export type Locations = {
  __typename?: 'Locations';
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Location>>>;
};

export type FilterEpisode = {
  name?: Maybe<Scalars['String']>;
  episode?: Maybe<Scalars['String']>;
};

export type Episodes = {
  __typename?: 'Episodes';
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Episode>>>;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE',
}

export type CharacterListQueryVariables = Record<string, unknown>;

export type CharacterListQuery = { __typename?: 'Query' } & {
  characters?: Maybe<
    { __typename?: 'Characters' } & {
      results?: Maybe<
        Array<
          Maybe<
            { __typename?: 'Character' } & Pick<
              Character,
              'id' | 'name' | 'status' | 'species' | 'image'
            > & {
                location?: Maybe<
                  { __typename?: 'Location' } & Pick<Location, 'name'>
                >;
                episode?: Maybe<
                  Array<
                    Maybe<{ __typename?: 'Episode' } & Pick<Episode, 'name'>>
                  >
                >;
              }
          >
        >
      >;
    }
  >;
};

export type CharacterProfileQueryVariables = {
  name?: Maybe<Scalars['String']>;
};

export type CharacterProfileQuery = { __typename?: 'Query' } & {
  characters?: Maybe<
    { __typename?: 'Characters' } & {
      results?: Maybe<
        Array<
          Maybe<
            { __typename?: 'Character' } & Pick<
              Character,
              'id' | 'name' | 'image'
            >
          >
        >
      >;
    }
  >;
};

export type StaticsQueryVariables = Record<string, unknown>;

export type StaticsQuery = { __typename?: 'Query' } & {
  characters?: Maybe<
    { __typename?: 'Characters' } & {
      info?: Maybe<{ __typename?: 'Info' } & Pick<Info, 'count'>>;
    }
  >;
  locations?: Maybe<
    { __typename?: 'Locations' } & {
      info?: Maybe<{ __typename?: 'Info' } & Pick<Info, 'count'>>;
    }
  >;
  episodes?: Maybe<
    { __typename?: 'Episodes' } & {
      info?: Maybe<{ __typename?: 'Info' } & Pick<Info, 'count'>>;
    }
  >;
};

export const CharacterListDocument = gql`
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
        }
      }
    }
  }
`;
export type CharacterListComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    CharacterListQuery,
    CharacterListQueryVariables
  >,
  'query'
>;

export const CharacterListComponent: React.FC<CharacterListComponentProps> = (
  props: CharacterListComponentProps,
) => (
  <ApolloReactComponents.Query<CharacterListQuery, CharacterListQueryVariables>
    query={CharacterListDocument}
    {...props}
  />
);

export type CharacterListProps<
  TChildProps = Record<string, unknown>,
  TDataName extends string = 'data'
> = {
  [key in TDataName]: ApolloReactHoc.DataValue<
    CharacterListQuery,
    CharacterListQueryVariables
  >;
} &
  TChildProps;
export function withCharacterList<
  TProps,
  TChildProps = Record<string, unknown>,
  TDataName extends string = 'data'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    CharacterListQuery,
    CharacterListQueryVariables,
    CharacterListProps<TChildProps, TDataName>
  >,
) {
  return ApolloReactHoc.withQuery<
    TProps,
    CharacterListQuery,
    CharacterListQueryVariables,
    CharacterListProps<TChildProps, TDataName>
  >(CharacterListDocument, {
    alias: 'characterList',
    ...operationOptions,
  });
}

/**
 * __useCharacterListQuery__
 *
 * To run a query within a React component, call `useCharacterListQuery` and pass it any options that fit your needs.
 * When your component renders, `useCharacterListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCharacterListQuery({
 *   variables: {
 *   },
 * });
 */
export function useCharacterListQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    CharacterListQuery,
    CharacterListQueryVariables
  >,
) {
  return ApolloReactHooks.useQuery<
    CharacterListQuery,
    CharacterListQueryVariables
  >(CharacterListDocument, baseOptions);
}
export function useCharacterListLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    CharacterListQuery,
    CharacterListQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<
    CharacterListQuery,
    CharacterListQueryVariables
  >(CharacterListDocument, baseOptions);
}
export type CharacterListQueryHookResult = ReturnType<
  typeof useCharacterListQuery
>;
export type CharacterListLazyQueryHookResult = ReturnType<
  typeof useCharacterListLazyQuery
>;
export type CharacterListQueryResult = ApolloReactCommon.QueryResult<
  CharacterListQuery,
  CharacterListQueryVariables
>;
export const CharacterProfileDocument = gql`
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
export type CharacterProfileComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    CharacterProfileQuery,
    CharacterProfileQueryVariables
  >,
  'query'
>;

export const CharacterProfileComponent: React.FC<CharacterListComponentProps> = (
  props: CharacterProfileComponentProps,
) => (
  <ApolloReactComponents.Query<
    CharacterProfileQuery,
    CharacterProfileQueryVariables
  >
    query={CharacterProfileDocument}
    {...props}
  />
);

export type CharacterProfileProps<
  TChildProps = Record<string, unknown>,
  TDataName extends string = 'data'
> = {
  [key in TDataName]: ApolloReactHoc.DataValue<
    CharacterProfileQuery,
    CharacterProfileQueryVariables
  >;
} &
  TChildProps;
export function withCharacterProfile<
  TProps,
  TChildProps = Record<string, unknown>,
  TDataName extends string = 'data'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    CharacterProfileQuery,
    CharacterProfileQueryVariables,
    CharacterProfileProps<TChildProps, TDataName>
  >,
) {
  return ApolloReactHoc.withQuery<
    TProps,
    CharacterProfileQuery,
    CharacterProfileQueryVariables,
    CharacterProfileProps<TChildProps, TDataName>
  >(CharacterProfileDocument, {
    alias: 'characterProfile',
    ...operationOptions,
  });
}

/**
 * __useCharacterProfileQuery__
 *
 * To run a query within a React component, call `useCharacterProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useCharacterProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCharacterProfileQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCharacterProfileQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    CharacterProfileQuery,
    CharacterProfileQueryVariables
  >,
) {
  return ApolloReactHooks.useQuery<
    CharacterProfileQuery,
    CharacterProfileQueryVariables
  >(CharacterProfileDocument, baseOptions);
}
export function useCharacterProfileLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    CharacterProfileQuery,
    CharacterProfileQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<
    CharacterProfileQuery,
    CharacterProfileQueryVariables
  >(CharacterProfileDocument, baseOptions);
}
export type CharacterProfileQueryHookResult = ReturnType<
  typeof useCharacterProfileQuery
>;
export type CharacterProfileLazyQueryHookResult = ReturnType<
  typeof useCharacterProfileLazyQuery
>;
export type CharacterProfileQueryResult = ApolloReactCommon.QueryResult<
  CharacterProfileQuery,
  CharacterProfileQueryVariables
>;
export const StaticsDocument = gql`
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
export type StaticsComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    StaticsQuery,
    StaticsQueryVariables
  >,
  'query'
>;

export const StaticsComponent: React.FC<StaticsComponentProps> = (
  props: StaticsComponentProps,
) => (
  <ApolloReactComponents.Query<StaticsQuery, StaticsQueryVariables>
    query={StaticsDocument}
    {...props}
  />
);

export type StaticsProps<
  TChildProps = Record<string, unknown>,
  TDataName extends string = 'data'
> = {
  [key in TDataName]: ApolloReactHoc.DataValue<
    StaticsQuery,
    StaticsQueryVariables
  >;
} &
  TChildProps;
export function withStatics<
  TProps,
  TChildProps = Record<string, unknown>,
  TDataName extends string = 'data'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    StaticsQuery,
    StaticsQueryVariables,
    StaticsProps<TChildProps, TDataName>
  >,
) {
  return ApolloReactHoc.withQuery<
    TProps,
    StaticsQuery,
    StaticsQueryVariables,
    StaticsProps<TChildProps, TDataName>
  >(StaticsDocument, {
    alias: 'statics',
    ...operationOptions,
  });
}

/**
 * __useStaticsQuery__
 *
 * To run a query within a React component, call `useStaticsQuery` and pass it any options that fit your needs.
 * When your component renders, `useStaticsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStaticsQuery({
 *   variables: {
 *   },
 * });
 */
export function useStaticsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    StaticsQuery,
    StaticsQueryVariables
  >,
) {
  return ApolloReactHooks.useQuery<StaticsQuery, StaticsQueryVariables>(
    StaticsDocument,
    baseOptions,
  );
}
export function useStaticsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    StaticsQuery,
    StaticsQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<StaticsQuery, StaticsQueryVariables>(
    StaticsDocument,
    baseOptions,
  );
}
export type StaticsQueryHookResult = ReturnType<typeof useStaticsQuery>;
export type StaticsLazyQueryHookResult = ReturnType<typeof useStaticsLazyQuery>;
export type StaticsQueryResult = ApolloReactCommon.QueryResult<
  StaticsQuery,
  StaticsQueryVariables
>;
