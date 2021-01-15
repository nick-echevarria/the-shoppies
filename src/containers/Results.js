import React from 'react';
import '../css/Results.css'

const Results = (props) => {
    let { results, nominate } = props; 
    return (
        <div className="results-container"> 
            <h2>Search Results</h2>
            <ul>
                {results.map((result) => ( 
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

export default Results;
