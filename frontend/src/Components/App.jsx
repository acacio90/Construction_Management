import React, { Component } from 'react';

import Logo from './Logo/Logo';
import Nav from './Nav/Nav';
import Main from './Main/Main';
import Footer from './Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo />
        <Nav />
        <Main />
        <Footer />
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <Logo />
//       <Nav />
//       <Main />
//       <Footer />
//     </div>
//   );
// }

export default App;
