import { useCallback, useEffect, useMemo, useState } from 'react';

import PokemonClient from 'services/PokemonClient';

import { PokemonTypeNormalized } from 'types/PokemonTypeNormalized';

type PokemonsHookType = () => {
  pokemons: PokemonTypeNormalized[];
  loading: boolean;
  fetchNextPage: () => void;
  hasMorePages: boolean;
  error: string | null;
};

const usePokemons: PokemonsHookType = () => {
  const [offset, setOffset] = useState(0);
  const [hasMorePages, setHasMorePages] = useState(true);
  const [nextPage, setNextPage] = useState(0);
  const [pokemons, setPokemons] = useState<PokemonTypeNormalized[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPokemons = useCallback(
    async (limit = 24) => {
      try {
        setLoading(true);
        const params = { offset, limit };

        const { data } = await PokemonClient.get('/pokemon', { params });
        setHasMorePages(!!data.next);
        setNextPage(Number(data.next.replace(/^.*offset=([^&]+).*$/, '$1')));
        setPokemons((prev) => [...prev, ...data.results]);
      } catch {
        setError('Pokemons not found');
        setPokemons([]);
      } finally {
        setLoading(false);
      }
    },
    [offset],
  );

  const fetchNextPage = useCallback(
    () => setOffset(() => nextPage),
    [nextPage],
  );

  useEffect(() => {
    fetchPokemons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset]);

  return useMemo(
    () => ({
      pokemons,
      loading,
      fetchNextPage,
      hasMorePages,
      error,
    }),
    [error, fetchNextPage, hasMorePages, loading, pokemons],
  );
};

export default usePokemons;
