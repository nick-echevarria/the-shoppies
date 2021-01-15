import React from 'react';
import Results from '../containers/Results';
import Nominations from '../containers/Nominations';
import '../css/Body.css'

const Body = (props) => {
    let {
        results,
        nominate,
        nominations,
        removeNomination
    } = props;
    return (
        <div className="result-nom-container">
            <Results results={results} nominate={nominate} />
            <Nominations nominations={nominations} removeNomination={removeNomination} />
        </div>
    );
}

export default Body;
