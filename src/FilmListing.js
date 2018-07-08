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
      this.setState({filter: filter})
    }

  render() {
    const safeArray = (this.state.filter === 'all') ? Array.from(this.props.films) : Array.from(this.props.faves);
    const allFilms = safeArray.map( (film) => <FilmRow film={film}
                                                      key={film.id}
                                                      onDetailsClick={() => this.props.onDetailsClick(film)}
                                                      onFaveToggle={() => this.props.onFaveToggle(film)}
                                                      isFave={ (this.props.faves.indexOf(film) > -1) ? true : false }
                                            />)
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
            <span className="section-count">{this.props.faves.length}</span>
          </div>
        </div>
        {allFilms}
      </div>
    )
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
