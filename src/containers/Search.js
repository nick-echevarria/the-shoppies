import React from 'react';
import '../css/Search.css'
import SearchBar from '../presentational/SearchBar'

const Search = (props) => {
    let { query, handleQuery, fetchMovies } = props; 

    return (
        <div className="search-container">
            <SearchBar query={query} handleQuery={handleQuery} fetchMovies={fetchMovies}/>
        </div>
    );
}

export default Search;
