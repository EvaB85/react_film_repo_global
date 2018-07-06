import React, { Component } from 'react';
import './App.css';
import FilmDetails from './FilmDetails';
import FilmListing from './FilmListing';
import TMDB from './TMDB';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="film-library">
          {/* component instance = <FilmListing /> */}
          <FilmListing films={TMDB.films} />
          <FilmDetails film={TMDB.films[0]} />
        </div>
      </div>
    );
  }
}


export default App;
