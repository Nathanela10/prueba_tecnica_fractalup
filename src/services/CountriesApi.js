import { ApolloClient, InMemoryCache, gql } from '@apollo/client/core';

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com',
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
  const response = await client.query({
    query: GET_COUNTRIES,
  });

  return response.data.countries;
}
