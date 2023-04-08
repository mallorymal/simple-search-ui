import { Component, For, Show } from 'solid-js';
import { animes } from '../store/store';
import { AnimeItem } from './AnimeItem';
import { Loader } from './Loader';

export const AnimeList: Component = () => {
  return (
    <Show when={!animes.loading} fallback={<Loader />}>
      <div
        style={{
          display: 'grid',
          'grid-template-columns': 'repeat(auto-fill, 13.5rem)',
          'justify-content': 'space-between',
          gap: '1em',
        }}
      >
        <For each={animes.data}>
          {(item) => (
            <AnimeItem
              id={item.node.id}
              title={item.node.title}
              imageSrc={item.node.main_picture.medium}
            />
          )}
        </For>
      </div>
    </Show>
  );
};
