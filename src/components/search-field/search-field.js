import React from 'react';
import './search-field.css';

export const SearchField = ({placeholder, handleChange}) => {

    return (
        <input type='search'
               placeholder={placeholder}
               className='search'
               onChange={handleChange}/>
    )
}
