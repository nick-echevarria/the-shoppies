import React from 'react';
import '../css/SearchBar.css'

const SearchBar = (props) => {
    let { query, handleQuery, fetchMovies } = props; 

    return (
        <div className="search-bar-container">
            <form>
                <input
                    type="text"
                    name="query"
                    id="main-search-bar"
                    value={query}
                    onChange={(e) => { handleQuery(e); fetchMovies(e)}}
                    placeholder="Type your movie search here"
                />
                <input id="search-button" type="submit" value="Search"/>
            </form>
        </div>
    );
}

export default SearchBar;
