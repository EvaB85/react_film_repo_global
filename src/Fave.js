import React, { Component } from 'react';

class Fave extends Component {
  handleClick = (e) => {
    e.stopPropagation()
    console.log('Handling fav click!');
  }

  render() {
    return(
      <div onClick={this.handleClick} className="film-row-fave add_to_queue">
        <p className="material-icons">add_to_queue</p>
      </div>
    )
  }
}

export default Fave;
