import { Component } from 'solid-js';
import { AnimeList } from '../components/AnimeList';
import { SearchAnime } from '../components/SearchAnime';

const Home: Component = () => {
  return (
    <div class='container w-75'>
      <SearchAnime />
      <AnimeList />
    </div>
  );
};

export default Home;
