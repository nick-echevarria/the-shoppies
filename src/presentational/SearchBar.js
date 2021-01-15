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
                    id="search-bar"
                    value={query}
                    onChange={(e) => { handleQuery(e); fetchMovies(e)}}
                    placeholder="Type your movie search here"
                    autocomplete="off"
                />
            </form>
        </div>
    );
}

export default SearchBar;