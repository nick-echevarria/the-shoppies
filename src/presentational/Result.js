import React from 'react';
import '../css/Result.css'

const Result = (props) => {
    let { results, nominate } = props; 
    return (
        <ul>
            {results && results.map((result) => ( 
                <li className="result" key={result.imdbID}>
                    <div className="movie-info">
                        {result.Title} ({result.Year})   
                    </div>
                    <div className="movie-button-container">
                        <button className="movie-button" style={{ backgroundImage: "url(" + `${result.Poster}` + ")"}} id={result.imdbID} disabled={false} onClick={() => nominate(result)}/>
                    </div>

                </li> 
            ))}
        </ul>
    );
}

export default Result;
