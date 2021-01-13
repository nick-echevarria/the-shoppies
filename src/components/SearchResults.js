import React from 'react';
import '../css/SearchResults.css'

const SearchResults = (props) => {
    // eslint-disable-next-line
    let { searchResults, nominate } = props; 
    return (
        <div className="search-result-container"> 
            <h2>Search Results</h2>
            <ul>
                {searchResults && searchResults.map((result) => ( 
                    <li key={result.imdbID}>
                        {result.Title}
                        ({result.Year})                        
                        <button id={result.imdbID} disabled={false} onClick={() => nominate(result)}> Nominate </button>
                    </li> 
                ))}
            </ul>
        </div>
    );
}

export default SearchResults;
