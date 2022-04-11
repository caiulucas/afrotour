import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { CitiesProvider } from './hooks/useCities';

import { PrismicProvider } from '@prismicio/react'
import { client } from './prismic'

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    <PrismicProvider client={client}>
      <CitiesProvider>
        <App />
      </CitiesProvider>
    </PrismicProvider>
  );
