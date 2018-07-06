import React, { Component } from 'react';

class Fave extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isFave: false
    }
    this.handleClick = this.handleClick.bind(this)
  };

  handleClick = (e) => {
    e.stopPropagation()
    this.setState({isFave: !this.state.isFave})
  }

  render() {
    const isFave = (this.state.isFave) ? 'remove_from_queue' : 'add_to_queue'
    return(
      <div onClick={this.handleClick} className={`film-row-fave ${isFave}`}>
        <p className="material-icons">{isFave}</p>
      </div>
    )
  }
}

export default Fave;
