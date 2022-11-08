import { PokemonType } from 'types/PokemonType';
import { PokemonTypeNormalized } from 'types/PokemonTypeNormalized';

export const normalizePokemonsQueryResults = (
  results: PokemonType[],
): PokemonTypeNormalized[] =>
  results.map((item) => ({
    id: item.id,
    height: item.height,
    image: item.image,
    moves: item.moves,
    name: item.name,
    specy: item.specy,
    weight: item.weight,
    types: item.types,
    stats: item.stats,
    images:
      JSON.parse(item?.images?.[0]?.sprites)?.other?.['official-artwork']
        ?.front_default ?? null,
  }));
