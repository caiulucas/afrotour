import React from 'react';

import { Navbar } from './components/Navbar';

import './styles/global.scss';
import './styles/navbar.scss';
import './styles/app.scss';
import './styles/cities.scss'
import { useCities } from './hooks/useCities';

export function App() {
  const { cities } = useCities();

  return (
    <div className="app">
      <Navbar />

      <section className="cities">
        <h1>Brasil</h1>
        <div className="card-container">
          {cities.map(city => (
          <div className="card" key={city.id}>
            <img 
              src="https://images.unsplash.com/photo-1629984557780-4dde2292e245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="Paisagem de São Paulo"
            />
            <div className="labels">
              <p><span>Cidade:</span>{city.city_name}</p>
              <p><span>População:</span>{city.population}</p>
              <p><span>Estado:</span>{city.state}</p>
              <p><span>Área:</span>{city.area} km²</p>
            </div>
          </div>
          ))}
        </div>
      </section>
    </div>
  );
}