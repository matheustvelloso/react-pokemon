import axios from 'axios';

import Config from 'Config';

const PokemonClient = axios.create({
  baseURL: Config.api.baseURL,
});

export default PokemonClient;
