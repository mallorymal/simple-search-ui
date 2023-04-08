import { AnimeDetail } from '../components/AnimeDetail';
import { useParams } from 'react-router-dom';
import { Layout } from '../components/Layout';

const Anime: React.FC = () => {
  const params = useParams();
  return (
    <Layout>
      <AnimeDetail id={params.id || ''} />
    </Layout>
  );
};

export default Anime;
