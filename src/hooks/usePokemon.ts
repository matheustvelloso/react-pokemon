import { useMemo } from 'react';

import { useQuery } from '@apollo/client';

import { PokemonType } from 'types/PokemonType';

import { GET_POKEMON } from '../GraphQL';

type PokedexDataType = {
  results: PokemonType[];
};

type PokemonHookType = (name: string | undefined) => {
  pokemon: PokemonType;
  loading: boolean;
};

const usePokemon: PokemonHookType = (name) => {
  const { data, loading } = useQuery<PokedexDataType>(GET_POKEMON, {
    skip: !name,
    variables: { name },
  });

  const [pokemon] = useMemo(
    () =>
      [...(data?.results ?? [])].map((_pokemon) => ({
        ..._pokemon,
        image: _pokemon.images.map(
          (image) =>
            JSON.parse(image.sprites)?.other?.['official-artwork']
              ?.front_default,
        )[0],
      })),
    [data],
  ) as PokemonType[];

  return useMemo(
    () => ({
      pokemon,
      loading,
    }),
    [loading, pokemon],
  );
};

export default usePokemon;
