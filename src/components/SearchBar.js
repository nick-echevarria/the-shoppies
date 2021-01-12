import React, { useState } from 'react';
import '../css/SearchBar.css'
import useSearchBarInput from './CustomHooks'

const SearchBar = () => {
    const { handleSubmit, handleUserInput, userInput } = useSearchBarInput(); 
    
    return (
        <div className="search-bar-container">
            <input
                type="text"
                name="userInput"
                id="main-search-bar"
                value={ userInput }
                onChange={ handleUserInput }
                onSubmit={ handleSubmit }
                placeholder="Type your movie search here"
            />
        </div>
    );
}

export default SearchBar;
