import React, { Component } from 'react';
import FilmRow from './FilmRow';

class FilmListing extends Component {
  render() {
    // let allFilms = this.props.films.map(function(film) {
    //   return <h1>{film.title}</h1>
    // });
    let allFilms = this.props.films.map((film) => {
      return <FilmRow key={film.id} film={film} />
    });
    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        {allFilms}
      </div>
    );
  }
}

export default FilmListing;
