import { Component, createResource, Match, Switch } from 'solid-js';
import { fetchAnimeById } from '../api/anime';
import { Loader } from './Loader';

interface AnimeDetailProps {
  id: string;
}

export const AnimeDetail: Component<AnimeDetailProps> = ({ id }) => {
  const [animeData] = createResource(() => id, fetchAnimeById);
  return (
    <Switch
      fallback={
        <div class='alert alert-primary' role='alert'>
          {animeData()?.error?.details}
        </div>
      }
    >
      <Match when={animeData.loading}>
        <Loader />
      </Match>
      <Match when={!!animeData()?.response}>
        <div class='container d-flex flex-column align-items-center my-5'>
          <div class=''>
            <img
              class='rounded'
              src={animeData()?.response?.main_picture?.large}
              alt={animeData()?.response?.title}
            />
          </div>
          <h3 class='my-3 '>
            <strong>{animeData()?.response?.title}</strong>
          </h3>
          <p class='w-50'>{animeData()?.response?.synopsis}</p>
        </div>
      </Match>
    </Switch>
  );
};
