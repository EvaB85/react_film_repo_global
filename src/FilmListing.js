import React, { Component } from 'react';
import FilmRow from './FilmRow';

class FilmListing extends Component {
  render() {
    const safeArray = Array.from(this.props.films);
    var allFilms = safeArray.map((film) => <FilmRow film={film} key={film.id} />)
    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        {/* <h3>{this.props.films[0].title}</h3> */}
        {allFilms}
      </div>
    );
  }
}

export default FilmListing;
