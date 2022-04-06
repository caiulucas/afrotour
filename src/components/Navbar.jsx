import React from 'react';

import { Button } from './Button';

import { ReactComponent as BrazilSvg } from '../assets/brazil.svg';
import { ReactComponent as PortugalSvg } from '../assets/portugal.svg';

export function Navbar(props) {
  return (
    <nav className="navbar">
      <h1>AfroTour</h1>

      <div className="button-container">
        <Button setCities={props.setCities} title="Brasil" country="brazil" icon={BrazilSvg}/>
        <Button title="Portugal" country="portugal" icon={PortugalSvg} />        
      </div>
    </nav>
  )
}