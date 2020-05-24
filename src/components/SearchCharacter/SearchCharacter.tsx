import React from 'react';
import { useSearchCharacter } from './hooks';

const SearchCharacter = () => {
  const { handleInputChange, searchInput } = useSearchCharacter();
  return (
    <div>
      <input
        minLength={3}
        onChange={handleInputChange}
        placeholder="Search"
        type="text"
        value={searchInput}
      />
    </div>
  );
};

export default SearchCharacter;
