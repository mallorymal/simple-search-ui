interface AnimeItemProps {
  id: number;
  title: string;
  imageSrc: string;
}

export const AnimeItem: React.FC<AnimeItemProps> = (props) => {
  const { id, title, imageSrc } = props;
  return (
    <div className='card d-flex shadow-sm bg-body' style={{ width: '13.5rem', height: '24rem' }}>
      <img
        src={imageSrc}
        className='card-img m-auto h-75'
        alt={title}
        style={{ objectFit: 'cover' }}
      />
      <div className='card-body'>
        <h5 className='card-title text-truncate'>{title}</h5>
        <a href={`/anime/${id}`}>View</a>
      </div>
    </div>
  );
};
