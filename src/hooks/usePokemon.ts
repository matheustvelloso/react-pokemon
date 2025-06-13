import { useCallback, useEffect, useMemo, useState } from 'react';

import PokemonClient from 'services/PokemonClient';

import { PokemonType } from 'types/PokemonType';

export type SpeciesType = {
  id: number;
  name: string;
  order: number;
  gender_rate: number;
  capture_rate: number;
  base_happiness: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  hatch_counter: number;
  has_gender_differences: boolean;
  forms_switchable: boolean;
  form_descriptions: [
    { description: string; language: { name: string; url: string } },
  ];
  color: {
    name: string;
    url: string;
  };
};

type PokemonHookType = (name: string | undefined) => {
  pokemon: PokemonType | null | undefined;
  species: SpeciesType | null | undefined;
  loading: boolean;
  error: string | null;
};

const usePokemon: PokemonHookType = (name) => {
  const [pokemon, setPokemon] = useState<PokemonType | null>();
  const [species, setSpecies] = useState<SpeciesType | null>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPokemon = useCallback(async () => {
    try {
      setLoading(true);

      const { data } = await PokemonClient.get(`/pokemon/${name}`);

      setPokemon(data);
    } catch {
      setError('Pokemon not found');
      setPokemon(null);
    } finally {
      setLoading(false);
    }
  }, [name]);

  const fetchSpecies = useCallback(async () => {
    try {
      setLoading(true);

      const { data } = await PokemonClient.get(`/pokemon-species/${name}/`);
      setSpecies(data);
    } catch {
      setError('Species not found');
      setSpecies(null);
    } finally {
      setLoading(false);
    }
  }, [name]);

  useEffect(() => {
    fetchPokemon();
    fetchSpecies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return useMemo(
    () => ({
      pokemon,
      species,
      loading,
      error,
    }),
    [error, loading, pokemon, species],
  );
};

export default usePokemon;
