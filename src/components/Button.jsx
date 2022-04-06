import React from 'react';
import { useCities } from '../hooks/useCities';

export function Button(props) {
  const { listCitiesByCountry, selectedCountry } = useCities();

  function handleChangeCities(country) {
    listCitiesByCountry(country)
  }

  return (
    <button 
      className={selectedCountry === props.country && 'selected'}
      onClick={() => handleChangeCities(props.country)}
    >{<props.icon />}{props.title}</button>
  )
}