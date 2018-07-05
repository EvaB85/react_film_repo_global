import React, { Component } from 'react';

// stateful component
// class FilmPoster extends Component {
//   render() {
//     return (
//       <div>
//         <img src={this.props.url} alt="" />
//       </div>
//     );
//   }
// }

// functional component
const FilmPoster = props => {
  return (
    <div>
      <img src={props.url} alt="" />
    </div>
  );
}

export default FilmPoster;
