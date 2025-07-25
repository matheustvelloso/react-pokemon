type DescriptionType = {
  text: string;
};
type Type = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};
type StatsAndValuesType = {
  base_stat: number;
  stat: {
    name: string;
  };
};

type SpriteType = {
  sprites: string;
  spritesJSON: {
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
};

type MoveType = {
  move: {
    name: string | undefined;
  };
};
export type PokemonColor =
  | 'green'
  | 'red'
  | 'blue'
  | 'white'
  | 'brown'
  | 'yellow'
  | 'purple'
  | 'pink'
  | 'gray';

export type PokemonType = {
  id: number;
  name: string;
  height: number;
  weight: number;
  image?: string;
  specy: {
    color: {
      name: PokemonColor;
    };
    gender_rate: number;
    has_gender_differences: boolean;
    descriptions: DescriptionType[];
  };
  images: SpriteType[];
  types: Type[];
  moves: MoveType[];
  stats: StatsAndValuesType[];
};
