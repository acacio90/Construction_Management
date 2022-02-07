import React, { Component } from 'react';
import Header from '../Header/Header';

class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <main className="content">Main</main>
      </React.Fragment>
    );
  }
}

// function Main(props) {
//   return (
//     <React.Fragment>
//       <Header />
//       <main className="content"></main>
//     </React.Fragment>
//   );
// }

export default Main;
