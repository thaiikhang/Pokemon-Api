export interface Pokemon {
    id: number;
    name: string;
    sprites: {
      front_default: string;
    };
  }

export interface Detail {
    id: number;
    isOpened: boolean;
  }