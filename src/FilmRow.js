import React, { Component } from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave';

class FilmRow extends Component {
  handleDetailsClick = (film) => {
    console.log('Fetching details for ', film)
  }
  render() {
    // const posterUrl = 'https://image.tmdb.org/t/p/w780' + this.props.film.poster_path;
    let year = new Date(this.props.film.release_date).getFullYear();
    return (
      <div onClick={() => this.handleDetailsClick(this.props.film.title)} className="film-row">
        <FilmPoster film={this.props.film} />

        <div className="film-summary">
          <Fave />
          <h2>{this.props.film.title}</h2>
          <p>{year}</p>
        </div>
      </div>
    );
  }
}

export default FilmRow;
