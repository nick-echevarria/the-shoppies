import { queryByTestId } from '@testing-library/react';
import React from 'react';
import '../css/SubHeader.css'

const SubHeader = (props) => {
    let { query } = props; 
    return (
        <div className="subheader-container">
            {query.length === 0 ? <h2 className="search-results-title">Search Results</h2> : <h2 className="search-results-title">Search Results for "{query}"</h2>}
            <h2 className="nominations-title">Nominations</h2>
        </div>
    );
}

export default SubHeader;
