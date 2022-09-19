import { useCallback, useEffect, useMemo, useState } from 'react';

import { useQuery } from '@apollo/client';

import { PokemonType } from 'types/PokemonType';

import { GET_POKEMONS } from '../GraphQL';

type PokedexDataType = {
  results: PokemonType[];
};

type PokemonsHookType = () => {
  pokemons: PokemonType[];
  loading: boolean;
  fetchNextPage: () => void;
  hasMorePages: boolean;
};

const RESULTS_PER_PAGE = 24;

const usePokemons: PokemonsHookType = () => {
  const [offset, setOffset] = useState(0);
  const [hasMorePages, setHasMorePages] = useState(true);

  const { data, loading } = useQuery<PokedexDataType>(GET_POKEMONS, {
    variables: { limit: RESULTS_PER_PAGE, offset },
  });

  const fetchNextPage = useCallback(
    () => setOffset((prev) => prev + RESULTS_PER_PAGE),
    [],
  );

  const pokemons = useMemo(
    () =>
      [...(data?.results ?? [])].map((pokemon) => ({
        ...pokemon,
        image: pokemon.images.map(
          (image) =>
            JSON.parse(image.sprites)?.other?.['official-artwork']
              ?.front_default,
        )[0],
      })),
    [data],
  ) as PokemonType[];

  useEffect(() => {
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
