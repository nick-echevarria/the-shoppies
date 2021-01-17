import React from 'react';
import Nomination from '../presentational/Nomination'
import '../css/Nominations.css'

const Nominations = (props) => {
    let { nominations, removeNomination } = props; 
    return (
        <div className="nominations-container">             
            <Nomination nominations={nominations} removeNomination={removeNomination}/>
        </div>
    );
}

export default Nominations;
