import { useState, useEffect } from 'react';
import { fetchAnimeById } from '../api/anime';
import { AnimeData } from '../model/anime.model';
import { Loader } from './Loader';

interface AnimeDetailProps {
  id: string;
}

export const AnimeDetail: React.FC<AnimeDetailProps> = ({ id }) => {
  const [animeData, setAnimeData] = useState<AnimeData | null>(null);
  const [error, setError] = useState<{ details: string } | null>(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      setLoading(true);
      const { response, error } = await fetchAnimeById(id);
      setAnimeData(response);
      setError(error);
      setLoading(false);
    })();
  }, [id]);

  if (!animeData || error)
    return (
      <div className='alert alert-primary' role='alert'>
        {error?.details}
      </div>
    );
  if (loading) return <Loader />;

  return (
    <div className='container d-flex flex-column align-items-center my-5'>
      <div className=''>
        <img className='rounded' src={animeData.main_picture?.large} alt={animeData.title} />
      </div>
      <h3 className='my-3 '>
        <strong>{animeData.title}</strong>
      </h3>
      <p className='w-50'>{animeData.synopsis}</p>
    </div>
  );
};
