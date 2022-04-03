import React from 'react';

export function Button(props) {
  return (
    <button>{props.icon}{props.title}</button>
  )
}