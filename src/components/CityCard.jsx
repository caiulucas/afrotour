import React from 'react';

export function CityCard({ 
  cityName, 
  state,
  area, 
  population, 
  image 
}) {
  return (
    <div className="card">
      <img 
        src={image}
        alt={`Paisagem de ${cityName}`}
      />
      <div className="labels">
        <p><span>Cidade:</span>{cityName}</p>
        <p><span>População:</span>{population}</p>
        <p><span>Estado:</span>{state}</p>
        <p><span>Área:</span>{area} km²</p>
      </div>
    </div>
  );
}