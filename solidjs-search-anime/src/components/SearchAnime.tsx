import { Component, createSignal } from 'solid-js';
import { fetchAnime } from '../api/anime';
import { animes, setAnimes } from '../store/store';

const [input, setInput] = createSignal('');

const handleSearch = async (input: string) => {
  setAnimes('loading', true);
  const { response } = await fetchAnime(input);
  setAnimes('data', response.data);
  setAnimes('loading', false);
};

export const SearchAnime: Component = () => {
  return (
    <div>
      <div class='container my-3 input-group w-50'>
        <input
          type='text'
          id='search'
          class='form-control'
          value={input()}
          onChange={(e) => setInput(e.currentTarget.value)}
        />
        <button type='button' class='btn btn-primary btn-sm' onClick={() => handleSearch(input())}>
          Search
        </button>
      </div>
      <p class='text-center'>Found: {animes.data.length}</p>
    </div>
  );
};
