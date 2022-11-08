import { useCallback, useEffect, useMemo, useState } from 'react';

import { useQuery } from '@apollo/client';

import { normalizePokemonsQueryResults } from 'helpers/helpers';

import { PokemonType } from 'types/PokemonType';
import { PokemonTypeNormalized } from 'types/PokemonTypeNormalized';

import { GET_POKEMONS } from '../GraphQL';

type PokedexDataType = {
  results: PokemonType[];
};

type PokemonsHookType = () => {
  pokemons: PokemonTypeNormalized[];
  loading: boolean;
  fetchNextPage: () => void;
  hasMorePages: boolean;
};

const RESULTS_PER_PAGE = 24;

const usePokemons: PokemonsHookType = () => {
  const [offset, setOffset] = useState(0);
  const [hasMorePages, setHasMorePages] = useState(true);
  const [pokemons, setPokemons] = useState<PokemonTypeNormalized[]>([]);

  const { data, loading } = useQuery<PokedexDataType>(GET_POKEMONS, {
    variables: { limit: RESULTS_PER_PAGE, offset },
  });

  const fetchNextPage = useCallback(
    () => setOffset((prev) => prev + RESULTS_PER_PAGE),
    [],
  );

  useEffect(() => {
    if (!!data && Array.isArray(data.results))
      setPokemons((prev) => [
        ...prev,
        ...normalizePokemonsQueryResults(data.results),
      ]);

    if (data?.results.length && data?.results.length < RESULTS_PER_PAGE) {
      setHasMorePages(false);
    }
  }, [data]);

  return useMemo(
    () => ({
      pokemons,
      loading,
      fetchNextPage,
      hasMorePages,
    }),
    [fetchNextPage, hasMorePages, loading, pokemons],
  );
};

export default usePokemons;
