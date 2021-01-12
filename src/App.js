import './App.css';
import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults'
import NominationList from './components/NominationList'

function App() { 

  return (
    <div className="app-container">
      <div className="header-container"> 
        <header className="app-header" />
      </div>
      <SearchBar />
      <SearchResults />
      <NominationList />
    </div>
  );
}

export default App;
