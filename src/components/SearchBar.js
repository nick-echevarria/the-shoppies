import React from 'react';
import '../css/SearchBar.css'

const SearchBar = (props) => {
    let { userInput, handleUserInput, handleSearchSubmit } = props; 

    return (
        <div className="search-bar-container">
            <form onSubmit={ handleSearchSubmit } >
                <input
                    type="text"
                    name="userInput"
                    id="main-search-bar"
                    value={ userInput }
                    onChange={ handleUserInput }
                    placeholder="Type your movie search here"
                />
                <input id="search-button" type="submit" value="Search"/>
            </form>
        </div>
    );
}

export default SearchBar;
