import React, { Component } from 'react';
import FilmRow from './FilmRow';

class FilmListing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filter: 'all'
    }
    this.handleFilterClick = this.handleFilterClick.bind(this)
  };

    handleFilterClick = (filter) => {
      console.log('Setting filter to ', filter)
      this.setState({filter: filter})
    }
  render() {
    const safeArray = Array.from(this.props.films);
    var allFilms = safeArray.map((film) => <FilmRow film={film} key={film.id} />)
    const all = this.state.filter === 'all' ? 'is-active' : '';
    const faves  = this.state.filter === 'faves' ? 'is-active' : '';
    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">
          <div onClick={() => this.handleFilterClick('all')} className={`film-list-filter ${all}`} >
            ALL
            <span className="section-count">{this.props.films.length}</span>
          </div>
          <div onClick={() => this.handleFilterClick('faves')} className={`film-list-filter ${faves}`} >
            FAVES
            <span className="section-count">0</span>
          </div>
        </div>
    {allFilms}
      </div>
    );
  }
}

export default FilmListing;

// let name = 'scott';
// let age = 31;
//
// let obj = {
//   name: name,
//   age: age
// };
//
// let obj2 = {
//   name,
//   age
// }
