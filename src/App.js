import './App.css';
import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import NominationList from './components/NominationList';

const OMDB_ENDPOINT = "https://www.omdbapi.com/?apikey=fbf45268&s="

class App extends Component {
  state = { userInput: '', searchResults: null, nominationList: [] }

  handleUserInput = (event) => { 
    this.setState({ [event.target.name] : event.target.value })
  }

  handleSearchSubmit = (event) => { 
    event.preventDefault(); 
    console.log('App.js', event)
    fetch(OMDB_ENDPOINT + this.state.userInput)      
      .then(res => res.json())
      .then(results => this.setState({ searchResults : results["Search"] }))
  }

  nominate = (movie) => {
    //shallow duplicate the object to ensure data in searchResults isn't changed + have access to imdbID
    let newNomination = Object.assign({}, movie);
    let currentNominationList = this.state.nominationList;

    currentNominationList.push(newNomination)
    //disable clicked button
    let clickedBtn = document.getElementById(`${movie.imdbID}`)
    clickedBtn.disabled = !clickedBtn.disabled

    this.setState({ nominationList: currentNominationList })
  }

  removeNomination = (nomination) => { 
    let currentNominationList = this.state.nominationList;
    let newNominationList = currentNominationList.filter(movie => movie.imdbID !== nomination.imdbID )
    //reenable disabled button
    let clickedBtn = document.getElementById(`${nomination.imdbID}`)
    clickedBtn.disabled = !clickedBtn.disabled

    this.setState({ nominationList: newNominationList })
  }

  render() {
    return (
      <div className="app-container">
        <div className="header-container"> 
          <header className="header" />
        </div>
        <div className="search-bar-container">
          <SearchBar
            userInput={this.state.userInput}
            handleUserInput={this.handleUserInput}
            handleSearchSubmit={this.handleSearchSubmit}
          />
        </div>
        <div className="result-nod-container">
          <SearchResults searchResults={this.state.searchResults} nominate={this.nominate} disabledBtns={this.state.disabledBtns} />
          <NominationList nominationList={this.state.nominationList} removeNomination={this.removeNomination} />
        </div>
    </div>
    );
  }
}

export default App;
