import './App.css';
import React, { Component } from 'react';
import Header from './presentational/Header'
import Search from './containers/Search';
import SubHeader from './presentational/SubHeader';
import Body from './presentational/Body';


const OMDB_URL = "https://www.omdbapi.com"
const API_KEY = 'fbf45268'

class App extends Component {
  state = {
    query: '', 
    results: [],
    nominations: []
  }

  handleQuery = (event) => { 
    this.setState({ [event.target.name] : event.target.value })
  }

  fetchMovies = (event) => { 
    fetch(`${OMDB_URL}/?apikey=${API_KEY}&s=${event.target.value}`)      
      .then(res => res.json())
      .then(data => this.setState({ results : data["Search"] }))
  }

  nominate = (movie) => {
    //shallow duplicate the object to ensure data in results isn't changed + have access to imdbID
    let newNomination = Object.assign({}, movie);
    let currentNominations = this.state.nominations;

    currentNominations.push(newNomination);
    //disable clicked button
    let clickedBtn = document.getElementById(`${movie.imdbID}`)
    clickedBtn.disabled = !clickedBtn.disabled

    this.setState({ nominations: currentNominations })
  }

  removeNomination = (nomination) => { 
    let currentNominations = this.state.nominations;
    // eslint-disable-next-line
    let newNominations = currentNominations.filter(prevNomination => prevNomination.imdbID !== nomination.imdbID)
    console.log(newNominations)
    //reenable disabled button
    let clickedBtn = document.getElementById(`${nomination.imdbID}`)
    if (clickedBtn) clickedBtn.disabled = !clickedBtn.disabled

    this.setState({ nominations: newNominations })
  }

  render() {
    return (
      <div className="app-container">
        <Header/>
        <Search
          query={this.state.query}
          handleQuery={this.handleQuery}
          fetchMovies={this.fetchMovies}
        />
        <SubHeader />
        <Body
          results={this.state.results}          
          nominations={this.state.nominations}
          nominate={this.nominate}
          removeNomination={this.removeNomination}
        />
        {/* <Footer /> */}
    </div>
    );
  }
}

export default App;
