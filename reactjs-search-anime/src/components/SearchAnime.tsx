import { useState } from 'react';

interface SearchAnimeProps {
  handleSearch: (query: string) => void;
}

export const SearchAnime: React.FC<SearchAnimeProps> = ({ handleSearch }) => {
  const [input, setInput] = useState('');
  const onSubmit = () => {
    handleSearch(input);
  };
  return (
    <div>
      <div className='container my-3 input-group w-50'>
        <input
          type='text'
          id='search'
          className='form-control'
          value={input}
          onChange={(e) => setInput(e.currentTarget.value)}
        />
        <button type='button' className='btn btn-primary btn-sm' onClick={onSubmit}>
          Search
        </button>
      </div>
    </div>
  );
};
