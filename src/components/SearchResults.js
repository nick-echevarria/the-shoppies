import React from 'react';
import '../css/SearchResults.css'

const SearchResults = (props) => {
    return (
        <div className="search-result-container"> 
            <h2>Search Results</h2>
            <ul>
                {props.searchResults && props.searchResults.map((searchResultObj) => ( 
                    <li key={searchResultObj.imdbID}>
                        {searchResultObj.Title}
                        ({searchResultObj.Year})                        
                        <button onClick={() => props.nominate(searchResultObj.Title, searchResultObj.Year, searchResultObj.imdbID)}> Nominate </button>
                    </li> 
                ))}
            </ul>
        </div>
    );
}

export default SearchResults;
