import React from 'react';


import { Navbar } from './components/Navbar';
import { CityCard } from './components/CityCard';

import './styles/global.scss';
import './styles/app.scss';
import './styles/cities.scss';

const cities = [
  {
    id: 1,
    cityName: 'São Paulo',
    state: 'São Paulo',
    area: 1521,
    population: '12 M',
    image: 'https://images.unsplash.com/photo-1629984557780-4dde2292e245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
  },
  {
    id: 2,
    cityName: 'Rio de Janeiro',
    state: 'Rio de Janeiro',
    area: 1200,
    population: '6.7 M',
    image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
  },
  {
    id: 3,
    cityName: 'Salvador',
    state: 'Bahia',
    area: 693,
    population: '4 M',
    image: 'https://images.unsplash.com/photo-1533241818630-edad657eb3da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
  },
  {
    id: 4,
    cityName: 'Ouro Preto',
    state: 'Minas Gerais',
    area: 1.245,
    population: '74 K',
    image: 'https://images.unsplash.com/photo-1602538943305-ae2adee96952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80'
  },
];

export function App() {
  return (
    <div className="app">
      <Navbar />

      <section className="cities">
        <h1>Brasil</h1>
        <div className="card-container">
          {cities.map(city => (
            <CityCard key={city.id} city={city} />
          ))}
  
        </div>
      </section>
    </div>
  );
}