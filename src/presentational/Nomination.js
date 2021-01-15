import React from 'react';

const Nomination = (props) => {
    let { nominations, removeNomination } = props; 
    return (
        <ul>
            {nominations.map((nomination) => ( 
                <li key={nomination.imdbID}>
                    {nomination.Title}
                    ({nomination.Year})                        
                    <button onClick={() => removeNomination(nomination)}> Remove </button>
                </li> 
            ))}
        </ul>
    );
}

export default Nomination;
