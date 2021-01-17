import React from 'react';
import Result from '../presentational/Result'
import '../css/Results.css'

const Results = (props) => {
    let { results, nominate } = props; 
    return (
        <div className="results-container"> 
            <Result results={results} nominate={nominate}/>
        </div>
    );
}

export default Results;
