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
    nominationList: null, 
  }

  handleUserInput = (event) => { 
    this.setState({ [event.target.name] : event.target.value })
  }

  handleSearchSubmit = (event) => { 
    event.preventDefault(); 
    console.log(event)
    fetch(requests.OMDB_ENDPOINT + this.state.userInput)      
      .then(res => res.json())
      .then(results => this.setState({ searchResults : results }))
  }

  render() {
    return (
      <div className="app-container">
      <div className="header-container"> 
        <header className="app-header" />
      </div>
        <SearchBar
          userInput={this.state.userInput}
          handleUserInput={this.handleUserInput}
          handleSearchSubmit={this.handleSearchSubmit}
        />
        <div className="result-nod-container">
          <SearchResults searchResults={this.state.searchResults}/>
          <NominationList />
        </div>
    </div>
    );
  }
}

export default App;
