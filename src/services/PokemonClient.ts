import { ApolloClient, InMemoryCache } from '@apollo/client';

import Config from 'Config';

const PokemonClient = new ApolloClient({
  uri: Config.api.baseURL,
  cache: new InMemoryCache(),
});

export default PokemonClient;
