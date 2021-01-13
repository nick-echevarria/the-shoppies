import './App.css';
import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import NominationList from './components/NominationList';
import * as requests from './requests.js';

class App extends Component {
  state = {
    userInput: "", 
    searchResults: null, 
    nominationList: [], 
    disabledBtns: []
  }

  handleUserInput = (event) => { 
    this.setState({ [event.target.name] : event.target.value })
  }

  handleSearchSubmit = (event) => { 
    event.preventDefault(); 
    fetch(requests.OMDB_ENDPOINT + this.state.userInput)      
      .then(res => res.json())
      .then(results => this.setState({ searchResults : results["Search"] }))
  }

  nominate = (movie) => {
    //shallow dupe the object to ensure data in searchResults isn't changed + have access to imdbID
    let newNomination = Object.assign({}, movie);
    let currentNominationList = this.state.nominationList;

    currentNominationList.push(newNomination)

    this.setState({ nominationList: currentNominationList })
  }

  removeNomination = (nomination) => { 
    let currentNominationList = this.state.nominationList;
    let newNominationList = currentNominationList.filter(movie => movie.imdbID !== nomination.imdbID )
    
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
