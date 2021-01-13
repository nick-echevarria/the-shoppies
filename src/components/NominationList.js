import React from 'react';
import '../css/NominationList.css'

const NominationList = (props) => {
    let { nominationList } = props; 
    return (
        <div className="nomination-list-container"> 
            <h2>Nominations</h2>
            <ul>
                {nominationList && nominationList.map((nomination) => ( 
                    <li key={nomination.imdbID}>
                        {nomination.Title}
                        ({nomination.Year})                        
                        <button onClick={() => props.removeNomination(nomination)}> Remove </button>
                    </li> 
                ))}
            </ul>
        </div>
    );
}

export default NominationList;
