import { AnimeNode } from '../model/anime.model';
import { AnimeItem } from './AnimeItem';
import { Loader } from './Loader';

interface AnimeListProps {
  animes: AnimeNode[];

  loading: boolean;
}

export const AnimeList: React.FC<AnimeListProps> = ({ animes, loading }) => {
  if (loading) return <Loader />;

  return (
    <>
      <p className='text-center'>Found: {animes.length}</p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, 13.5rem)',
          justifyContent: 'space-between',
          gap: '1em',
        }}
      >
        {animes.map((item) => (
          <AnimeItem
            id={item.node.id}
            title={item.node.title}
            imageSrc={item.node.main_picture.medium}
          />
        ))}
      </div>
    </>
  );
};
