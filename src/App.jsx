import React, { useEffect } from 'react';


import { Navbar } from './components/Navbar';
import { CityCard } from './components/CityCard';

import './styles/global.scss';
import './styles/app.scss';
import './styles/cities.scss';
import { countryList } from './utils/countryList';
import { useCities } from './hooks/useCities';
import { SearchInput } from './components/SearchInput';

export function App() {  
  // const [document] = useSinglePrismicDocument('cities');  
  const { cities, selectedCountry } = useCities();

  useEffect(() => {
     
  }, [])

  return (
    <div className="app">
      <Navbar />

      <section className="cities"> 
        <div className="search-area">
          <SearchInput />
          <h1>{countryList[selectedCountry]}</h1>
        </div>
        <div className="card-container">
          {cities.map(city => (
            <CityCard key={city.id} city={city} />
          ))}
        </div>
      </section>
    </div>
  );
}