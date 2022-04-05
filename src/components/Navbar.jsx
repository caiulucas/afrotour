import React from 'react';

import { Button } from './Button';

import { ReactComponent as BrazilSvg } from '../assets/brazil.svg';
import { ReactComponent as PortugalSvg } from '../assets/portugal.svg';
import { ReactComponent as ItalySvg } from '../assets/italy.svg';
import { ReactComponent as FranceSvg } from '../assets/france.svg';

export function Navbar() {
  return (
    <nav className="navbar">
      <h1>AfroTour</h1>

      <div className="button-container">
        <Button title="Brasil" icon={BrazilSvg} />
        <Button title="Portugal" icon={PortugalSvg} />
        <Button title="Itália" icon={ItalySvg} />
        <Button title="França" icon={FranceSvg} />
      </div>
    </nav>
  )
}