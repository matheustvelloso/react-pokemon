import { memo, useCallback } from 'react';

import { PokemonTypeNormalized } from 'types/PokemonTypeNormalized';

import {
  Container,
  ImgContainer,
  LinkPokemon,
  PokemonName,
  SpanIndex,
} from './styles';

interface IPokemonsCardProps {
  poke: PokemonTypeNormalized;
}

const PokemonsCard: React.FC<IPokemonsCardProps> = ({ poke }) => {
  const pokeId = poke?.url.replace(/.*\/pokemon\/(\d+)\//, '$1');

  const getPokedexIndex = (id: string): string =>
    `#${String(id).padStart(3, '0')}`;

  const capitalizeString = useCallback((name: string) => {
    const str = name;
    const capitalized = str[0].toUpperCase() + str.substring(1);
    return capitalized;
  }, []);

  return (
    <LinkPokemon to={`/${poke.name}`} color="gray">
      <Container backgroundColor="gray">
        <div className="d-flex justify-content-end">
          <SpanIndex color="gray">{getPokedexIndex(pokeId)}</SpanIndex>
        </div>
        <div>
          <PokemonName>{capitalizeString(poke.name)}</PokemonName>
        </div>
        <ImgContainer>
          <img
            className="img-fluid"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeId}.png`}
            alt={poke.name}
          />
        </ImgContainer>
      </Container>
    </LinkPokemon>
  );
};

export default memo(PokemonsCard);
