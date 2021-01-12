import React from 'react';
import '../css/NominationList.css'

const NominationList = (props) => {
    // let { nominationList } = props.nominationList; 
    return (
        <div className="nomination-list-container"> 
            <h2>Nominations</h2>
            <ul>
                {props.nominationList && props.nominationList.map((nominationObj) => ( 
                    <li key={nominationObj.imdbID}>
                        {nominationObj.title}
                        ({nominationObj.year})                        
                        <button onClick={() => props.removeNomination(nominationObj.title, nominationObj.year, nominationObj.imdbID)}> Remove </button>
                    </li> 
                ))}
            </ul>
        </div>
    );
}

export default NominationList;
