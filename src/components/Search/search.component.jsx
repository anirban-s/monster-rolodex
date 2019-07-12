import React from 'react';
import './search.style.css';

export const SearchBox = ({placeholder, handleChange}) => (
    <div>
        <input type="search" className="search" placeholder={placeholder} onChange={handleChange}/>
    </div>
);