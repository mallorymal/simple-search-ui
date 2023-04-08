import { useState } from 'react';
import { fetchAnime } from '../api/anime';
import { AnimeList } from '../components/AnimeList';
import { Layout } from '../components/Layout';
import { SearchAnime } from '../components/SearchAnime';
import { AnimeNode } from '../model/anime.model';

const Home: React.FC = () => {
  const [animes, setAnimes] = useState<AnimeNode[]>([]);
  const [error, setError] = useState<{ details: string } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (input: string) => {
    setLoading(true);
    const { response, error } = await fetchAnime(input);
    setError(error);
    setAnimes(response.data);
    setLoading(false);
  };

  return (
    <Layout>
      <div className='container w-75'>
        <SearchAnime handleSearch={handleSearch} />
        {error && error.details}
        <AnimeList animes={animes} loading={loading} />
      </div>
    </Layout>
  );
};

export default Home;
