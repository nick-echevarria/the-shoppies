import React from 'react';
import '../css/Result.css'

const Result = (props) => {
    let { results, nominate, nominations } = props; 

    return (   
        <ul>
            {results && results.map((result) => ( 

                <li className="result" key={result.imdbID}>
                    <div className="movie-info">
                        <div className="result-title">{result.Title}</div><br/>
                        <div className="result-year">({result.Year})</div>
                    </div>
                    <div className="movie-button-container">
                        <button
                            className="movie-button"
                            style={{ backgroundImage: "url(" + `${result.Poster}` + ")" }}
                            id={result.imdbID}
                            disabled={false}
                            onClick={() => nominate(result)} />
                    </div>
                </li> 
            ))}
        </ul>
    );
}

export default Result;
