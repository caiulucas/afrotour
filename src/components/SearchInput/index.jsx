import React, { useState } from 'react';
import { useCities } from '../../hooks/useCities';
import './styles.scss';

export function SearchInput() {
  const { listCitiesByName } = useCities();
  const [searchText, setSearchText] = useState('');

  function handleInput(event) {
    setSearchText(event.target.value);
  }

  function handleSearch() {
    listCitiesByName(searchText);
  }

  return (
    <div className="search-input">
      <input placeholder='Pesquise uma cidade' onChange={handleInput} />
      <button onClick={handleSearch}>Pesquisar</button>
    </div>
  )
}