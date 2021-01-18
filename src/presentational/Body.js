import React from 'react';
import Results from '../containers/Results'
import Nominations from '../containers/Nominations'
import '../css/Body.css'

const Body = (props) => {
    let {
        results,
        nominations,
        nominate,
        removeNomination
    } = props;
    return (
        <div className='body-container'>
            <Results results={results} nominate={nominate} />
            <Nominations nominations={nominations} removeNomination={removeNomination} />
        </div>
    );
}

export default Body;
