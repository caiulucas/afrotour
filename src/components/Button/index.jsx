import React from 'react';
import './styles.scss';
import { countryList } from '../../utils/countryList';
import { useCities } from '../../hooks/useCities';

export function Button({ 
  icon: Icon,   
  country 
}) {
  const { listCitiesByCountry, selectedCountry } = useCities();

  async function handleChangeCities() {
    listCitiesByCountry(country)
  }

  return (
    <button className={`generic-button ${selectedCountry === country && 'selected'}`} onClick={handleChangeCities}>
      <Icon />{countryList[country]}
    </button>
  )
}