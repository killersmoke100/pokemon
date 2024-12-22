import { GraphQLClient } from 'graphql-request';

const endpoint = 'https://beta.pokeapi.co/graphql/v1beta'; 

export const graphqlClient = new GraphQLClient(endpoint);