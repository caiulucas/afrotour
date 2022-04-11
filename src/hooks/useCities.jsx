import { createContext, useContext, useEffect, useState } from "react"
import * as Prismic from '@prismicio/client';

const CitiesContext = createContext({});

const routes = [
  { type: 'cities', path: '/'}
]

const endpoint = Prismic.getRepositoryEndpoint('afrotour-caiulucas');

const client = Prismic.createClient(endpoint, { routes });

export const CitiesProvider = ({children}) => {
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('brazil');

  useEffect(() => {
      async function fetchData() {
      const results = await client.getAllByType('cities', {
        predicates: [Prismic.predicate.at('my.cities.country', selectedCountry)]
      });

      const resultCities = results.map(item => ({
        id: item.uid,
        cityName: item.data.city_name,
        area: item.data.area,
        population: item.data.population,
        country: item.data.country,
        image: item.data.image.url,
      }));

      setCities(resultCities);
    }

    fetchData();
  }, [selectedCountry])

  async function listCitiesByCountry(country) {
    setSelectedCountry(country);
  }

  async function listCitiesByName(cityName) {
    const results = await client.getAllByType('cities', {
      predicates: [
        Prismic.predicate.at('my.cities.country', selectedCountry),
        Prismic.predicate.fulltext('my.cities.city_name', cityName),
      ],
    });

    const resultCities = results.map(item => ({
      id: item.uid,
      cityName: item.data.city_name,
      area: item.data.area,
      population: item.data.population,
      country: item.data.country,
      image: item.data.image.url,
    }));

    console.log(resultCities)

    setCities(resultCities);
  }

  return (
    <CitiesContext.Provider value={{cities, listCitiesByCountry, selectedCountry, listCitiesByName}}>
      {children}
    </CitiesContext.Provider>
  )
}

export const useCities = () => {
  return useContext(CitiesContext);
}

// useEffect(() => {
   
//   async function fetchData() {
//     const { results } = await client.query([
//       Prismic.Predicates.at('document.type', 'cities')
//     ]);

//     const resultCities = results.map(item => ({
//       id: item.uid,
//       cityName: item.data.city_name,
//       area: item.data.area,
//       population: item.data.population,
//       country: item.data.country,
//       image: item.data.image.url,
//     }));

//     const filteredCities = resultCities.filter(city => city.country === selectedCountry)

//     console.log(resultCities);

//     // const response = await fetch('http://localhost:3333/brazil');

//     // const data = await response.json();
//     setCities(filteredCities);
//   }

//   fetchData();
// }, [selectedCountry])