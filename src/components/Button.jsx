import React from 'react';

export function Button({ icon: Icon , title }) {
  return (
    <button><Icon />{title}</button>
  )
}