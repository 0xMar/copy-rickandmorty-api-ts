import { useState } from 'react';

export const useSearchCharacter = () => {
  const [searchInput, setSearchInput] = useState('');
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  return { handleInputChange, searchInput };
};
