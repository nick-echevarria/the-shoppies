import React, { useState } from 'react';
import '../css/SearchResults.css'

const SearchResults = (props) => {
    // eslint-disable-next-line
    const [disabledBtns, setDisabledBtns] = useState([]);
    
    props.searchResults && props.searchResults.forEach(movie => {
        //take the movie's ID + compare to all movies in disabledBtns
        //if movie is in nomination list, disable buttion
    })
    
    return (
        <div className="search-result-container"> 
            <h2>Search Results</h2>
            <ul>
                {props.searchResults && props.searchResults.map((searchResultObj) => ( 
                    <li key={searchResultObj.imdbID}>
                        {searchResultObj.Title}
                        ({searchResultObj.Year})                        
                        <button disabled={false} onClick={() => props.nominate(searchResultObj.Title, searchResultObj.Year, searchResultObj.imdbID)}> Nominate </button>
                    </li> 
                ))}
            </ul>
        </div>
    );
}

export default SearchResults;
