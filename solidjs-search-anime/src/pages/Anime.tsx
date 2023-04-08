import { useParams } from '@solidjs/router';
import { AnimeDetail } from '../components/AnimeDetail';

const Anime = () => {
  const params = useParams();
  return <AnimeDetail id={params.id} />;
};

export default Anime;
