import React from 'react';

import { Navbar } from './components/Navbar';

import './styles/global.scss';
import './styles/navbar.scss';
import './styles/app.scss';
import './styles/cities.scss'

export function App() {
  return (
    <div  className="app">
      <Navbar />

      <section className="cities">
        <h1>Brasil</h1>
        <div className="card-container">
          <div className="card">
            <img 
              src="https://images.unsplash.com/photo-1629984557780-4dde2292e245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="Paisagem de São Paulo"
            />
            <div className="labels">
              <p><span>Cidade:</span>São Paulo</p>
              <p><span>População:</span>12 M</p>
              <p><span>Estado:</span>São Paulo</p>
              <p><span>Área:</span>1.521 km²</p>
            </div>
          </div>
          <div className="card">
            <img 
              src="https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="Paisagem de Rio de Janeiro"
            />
            <div className="labels">
              <p><span>Cidade:</span>Rio de Janeiro</p>
              <p><span>População:</span>6.7 M</p>
              <p><span>Estado:</span>Rio de Janeiro</p>
              <p><span>Área:</span>1.200 km²</p>
            </div>
          </div>
          <div className="card">
            <img 
              src="https://images.unsplash.com/photo-1533241818630-edad657eb3da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              alt="Paisagem de Salvador"
            />
            <div className="labels">
              <p><span>Cidade:</span>Salvador</p>
              <p><span>População:</span>4 M</p>
              <p><span>Estado:</span>Bahia</p>
              <p><span>Área:</span>693 km²</p>
            </div>
          </div>
          <div className="card">
            <img 
              src="https://images.unsplash.com/photo-1602538943305-ae2adee96952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
              alt="Paisagem de Ouro Preto"
            />
            <div className="labels">
              <p><span>Cidade:</span>Ouro Preto</p>
              <p><span>População:</span>74 K</p>
              <p><span>Estado:</span>Minas Gerais</p>
              <p><span>Área:</span>1.245 km²</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}