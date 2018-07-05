import React, { Component } from 'react';

class FilmRow extends Component {
  render() {
    // let posterUrl = 'https://image.tmdb.org/t/p/w780/' + this.props.film.poster_path;
    let posterUrl = `https://image.tmdb.org/t/p/w780/${this.props.film.poster_path}`;
    return (
      <div className="film-row">
        <img src={posterUrl} alt="" />
        <div className="film-summary">
          <h1>{this.props.film.title}</h1>
          <p>{new Date(this.props.film.release_date).getFullYear()}</p>
        </div>
      </div>
    );
  }
}

export default FilmRow;
