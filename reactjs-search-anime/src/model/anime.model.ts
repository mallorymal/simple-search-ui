export interface AnimeData {
  id: number;
  title: string;
  main_picture: {
    medium: string;
    large: string;
  };
  synopsis: string;
}

export interface AnimeNode {
  node: Omit<AnimeData, 'synopsis'>;
}

export interface FetchAnimeResponse {
  data: AnimeNode[];
  paging?: {
    previous?: string;
    next?: string;
  };
}
