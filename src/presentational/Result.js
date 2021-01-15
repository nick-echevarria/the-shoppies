import React from 'react';

const Result = (props) => {
    let { results, nominate } = props; 
    return (
        <ul>
            {results && results.map((result) => ( 
                <li key={result.imdbID}>
                    {result.Title}
                    ({result.Year})                        
                    <button id={result.imdbID} disabled={false} onClick={() => nominate(result)}> Nominate </button>
                </li> 
            ))}
        </ul>
    );
}

export default Result;
