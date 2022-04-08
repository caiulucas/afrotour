import React, { createContext, useContext, useState, useEffect } from 'react';

const citiesContext = createContext({});

export function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('brazil');

  useEffect(() => {
    async function fetchData() {
      const result = await fetch(`http://localhost:3333/${selectedCountry}`);

      const data = await result.json();

      setCities(data);
    }

    fetchData();
  }, [selectedCountry]);

  function listCitiesByCountry(country) {
    setSelectedCountry(country);
  }

  async function filterCitiesByName(cityName) {
    const result = await fetch(`http://localhost:3333/${selectedCountry}?cityName=${cityName}`);

    const data = await result.json();

    setCities(data);
  }

  return (
    <citiesContext.Provider value={{
      cities,
      selectedCountry,
      listCitiesByCountry,
      filterCitiesByName
    }}>
      {children}
    </citiesContext.Provider>
  );
}

export function useCities() {
  return useContext(citiesContext);
}