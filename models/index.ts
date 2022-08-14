export interface Anime {
  readonly id: number;
  title: {
    english?: string;
    native?: string;
  };
  coverImage: {
    large: string;
  };
  duration: string;
  favourites: number;
  type: string;
  countryOfOrigin: string;
}

export interface AnimeDetail extends Anime {
  seasonYear: number;
  genres: string;
  description: string;
  characters: {
    nodes: {
      id: number;
      name: {
        first: string;
        middle?: string;
        last?: string;
      };
      image: {
        large: string;
      };
    };
  };
}

export interface PageInfo {
  total: number;
  currentPage: number;
  lastPage: number;
  hasNextPage: boolean;
  perPage: number;
}
