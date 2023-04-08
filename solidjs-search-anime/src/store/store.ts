import { createStore } from 'solid-js/store';
import { AnimeNode } from '../model/anime.model';

const [animes, setAnimes] = createStore<{
  data: AnimeNode[];
  loading: boolean;
}>({
  data: [],
  loading: false,
});

export { animes, setAnimes };
