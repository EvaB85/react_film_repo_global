import React, { Component } from 'react';
import FilmRow from './FilmRow';

class FilmListing extends Component {
  render() {
    // can make a safe array
    const safeArray = Array.from(this.props.films);
    var allFilms = safeArray.map((film, i) => <h3>{film.title}</h3>)
    // original
      // let allFilms = this.props.films.map(function(film) {
      //   return <h1>{film.title}</h1>
      // });

    // used =>
      // let allFilms = this.props.films.map((film) => {
      //   return <FilmRow key={film.id} film={film} />
      // });
    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <h3>{this.props.films[0].title}</h3>
        {allFilms}
      </div>
    );
  }
}

export default FilmListing;
