import { Component } from 'solid-js';

interface AnimeItemProps {
  id: number;
  title: string;
  imageSrc: string;
}

export const AnimeItem: Component<AnimeItemProps> = (props) => {
  const { id, title, imageSrc } = props;
  return (
    <div class='card d-flex shadow-sm bg-body' style={{ width: '13.5rem', height: '24rem' }}>
      <img
        src={imageSrc}
        class='card-img m-auto h-75'
        alt={title}
        style={{ 'object-fit': 'cover' }}
      />
      <div class='card-body'>
        <h5 class='card-title text-truncate'>{title}</h5>
        <a href={`/anime/${id}`}>View</a>
      </div>
    </div>
  );
};
