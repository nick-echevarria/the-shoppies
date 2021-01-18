import React from 'react';
import Result from '../presentational/Result'
import '../css/Results.css'

const Results = (props) => {
    let { results, nominate, nominations } = props; 
    return (
        <div className="results-container"> 
            <Result results={results} nominate={nominate} nominations={nominations}/>
        </div>
    );
}

export default Results;
