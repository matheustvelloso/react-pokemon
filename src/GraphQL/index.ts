import { gql } from '@apollo/client';

export const GET_POKEMONS = gql`
  query getPokemonQuery($limit: Int!, $offset: Int!) {
    results: pokemon_v2_pokemon(
      limit: $limit
      offset: $offset
      order_by: { id: asc }
    ) {
      id
      name
      height
      weight
      specy: pokemon_v2_pokemonspecy {
        color: pokemon_v2_pokemoncolor {
          name
        }
        gender_rate
        has_gender_differences
        descriptions: pokemon_v2_pokemonspeciesflavortexts(
          where: { language_id: { _eq: 9 } }
          distinct_on: flavor_text
          limit: 1
        ) {
          text: flavor_text
        }
      }
      images: pokemon_v2_pokemonsprites {
        sprites
      }
      types: pokemon_v2_pokemontypes_aggregate {
        data: nodes {
          type: pokemon_v2_type {
            name
          }
        }
      }
      moves: pokemon_v2_pokemonmoves(order_by: { level: desc }, limit: 1) {
        move: pokemon_v2_move {
          name
        }
      }
      stats: pokemon_v2_pokemonstats {
        value: base_stat
        stat: pokemon_v2_stat {
          name
        }
      }
    }
  }
`;
export const GET_POKEMON = gql`
  query getPokemonQuery($name: String!) {
    results: pokemon_v2_pokemon(
      limit: 1
      offset: 0
      where: { name: { _eq: $name } }
    ) {
      id
      name
      height
      weight
      specy: pokemon_v2_pokemonspecy {
        color: pokemon_v2_pokemoncolor {
          name
        }
        gender_rate
        has_gender_differences
        descriptions: pokemon_v2_pokemonspeciesflavortexts(
          where: { language_id: { _eq: 9 } }
          distinct_on: flavor_text
          limit: 1
        ) {
          text: flavor_text
        }
      }
      images: pokemon_v2_pokemonsprites {
        sprites
      }
      types: pokemon_v2_pokemontypes_aggregate {
        data: nodes {
          type: pokemon_v2_type {
            name
          }
        }
      }
      moves: pokemon_v2_pokemonmoves(order_by: { level: desc }, limit: 1) {
        move: pokemon_v2_move {
          name
        }
      }
      stats: pokemon_v2_pokemonstats {
        value: base_stat
        stat: pokemon_v2_stat {
          name
        }
      }
    }
  }
`;
