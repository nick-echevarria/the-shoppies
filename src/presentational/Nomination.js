import React from 'react';
import '../css/Nomination.css'

const Nomination = (props) => {
    let { nominations, removeNomination } = props; 
    return (
        <ul>
            {nominations.map((nomination) => ( 
                <li className={nominations.length === 5 ? "nomination-full" : "nomination"} key={nomination.imdbID}>
                    <div className="nomination-title">
                        {nomination.Title}
                    </div>                  
                    <div className="remove-nomination-container">
                        <button
                            className="remove-nomination-button"
                            style={{ backgroundImage: `url(${nomination.Poster})` }}
                            onClick={() => removeNomination(nomination)}>
                        </button>
                    </div>
                </li> 
            ))}
        </ul>
    );
}

export default Nomination;
