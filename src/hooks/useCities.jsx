import { createContext, useContext, useEffect, useState } from "react"

const CitiesContext = createContext({});

export const CitiesProvider = ({children}) => {
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('brazil');

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:3333/brazil');

      const data = await response.json();
      setCities(data);
    }

    fetchData();
  }, [])

  async function listCitiesByCountry(country) {
    const response = await fetch(`http://localhost:3333/${country}`);

    const data = await response.json();

    setSelectedCountry(country);
    setCities(data);
  }

  return (
    <CitiesContext.Provider value={{cities, listCitiesByCountry, selectedCountry}}>
      {children}
    </CitiesContext.Provider>
  )
}

export const useCities = () => {
  return useContext(CitiesContext);
}