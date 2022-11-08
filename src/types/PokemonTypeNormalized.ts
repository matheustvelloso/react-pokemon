type DescriptionType = {
  text: string;
};
type Type = {
  type: {
    name: string;
  };
};
type StatsAndValuesType = {
  value: number;
  stat: {
    name: string;
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

export type PokemonTypeNormalized = {
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
  images: string;
  types: {
    data: Type[];
  };
  moves: MoveType[];
  stats: StatsAndValuesType[];
};
