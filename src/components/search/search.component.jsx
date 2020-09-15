import React from 'react';
import './search.styles.css';

export const Search = ({onSearch}) => (
  <input className="search" type="search" placeholder="Search" onChange={onSearch} />
);
