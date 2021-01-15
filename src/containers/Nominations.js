import React from 'react';
import '../css/Nominations.css'

const Nominations = (props) => {
    let { nominations, removeNomination } = props; 
    return (
        <div className="nominations-container"> 
            <h2>Nominations</h2>
            <ul>
                {nominations.map((nomination) => ( 
                    <li key={nomination.imdbID}>
                        {nomination.Title}
                        ({nomination.Year})                        
                        <button onClick={() => removeNomination(nomination)}> Remove </button>
                    </li> 
                ))}
            </ul>
        </div>
    );
}

export default Nominations;
