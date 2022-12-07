import { memo, useCallback } from 'react';

import logoPokedex from 'assets/logoPokedex.png';

import { PokemonTypeNormalized } from 'types/PokemonTypeNormalized';

import {
  Container,
  ImgContainer,
  LinkPokemon,
  PokemonName,
  SpanIndex,
  SpanType,
} from './styles';

interface IPokemonsCardProps {
  poke: PokemonTypeNormalized;
}

const PokemonsCard: React.FC<IPokemonsCardProps> = ({ poke }) => {
  const getPokedexIndex = (id: number): string =>
    `#${String(id).padStart(3, '0')}`;

  const capitalizeString = useCallback((name: string) => {
    const str = name;
    const capitalized = str[0].toUpperCase() + str.substring(1);
    return capitalized;
  }, []);

  return (
    <LinkPokemon to={`/${poke.name}`} color={poke.specy.color.name}>
      <Container backgroundColor={poke.specy.color.name}>
        <div className="d-flex justify-content-end">
          <SpanIndex color={poke.specy.color.name}>
            {getPokedexIndex(poke.id)}
          </SpanIndex>
        </div>
        <div>
          <PokemonName>{capitalizeString(poke.name)}</PokemonName>
        </div>
        <ImgContainer>
          <div>
            {poke.types.data.map((type) => (
              <SpanType key={type.type.name} color={poke.specy.color.name}>
                {capitalizeString(type.type.name)}
              </SpanType>
            ))}
          </div>
          <img
            className="img-fluid"
            src={poke.images ? poke.images : logoPokedex}
            alt={poke.name}
          />
        </ImgContainer>
      </Container>
    </LinkPokemon>
  );
};

export default memo(PokemonsCard);
