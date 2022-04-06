import React from 'react';
import './styles.scss';

export function Button({ icon: Icon , title }) {
  return (
    <button><Icon />{title}</button>
  )
}