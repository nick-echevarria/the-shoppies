import React from 'react';
import '../css/SearchResults.css'

//has to take fetched data and create a list w/buttons

// const [movieData, setMovieData] = useState([])
const OMDB_ENDPOINT = "http://www.omdbapi.com/?apikey=[fbf45268]&" 

const SearchResults = () => {
    return (
        <div> 
            <p>I'm the SearchResults component!</p>
        </div>
    );
}

export default SearchResults;
