import { ApolloClient, InMemoryCache, gql } from '@apollo/client/core';

const client = new ApolloClient({
  uri: process.env.VUE_APP_COUNTRIES_API,
  cache: new InMemoryCache(),
});

const GET_COUNTRIES = gql`
  query {
    countries {
      code
      emoji
      name
      continent {
        code
        name
      }
      capital
      languages {
        code
        name
      }
      currency
      states {
        code
        name
      }
    }
  }
`;

export async function getCountries() {
  try {
    const response = await client.query({
      query: GET_COUNTRIES,
    });

    return response.data.countries;
  } catch (error) {
    console.error('Error al obtener los países:', error);
    throw error;
  }
}
