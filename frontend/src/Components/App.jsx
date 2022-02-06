import './Style';
import React from 'react';

import Logo from './Logo/Logo';
import Nav from './Nav/Nav';
import Main from './Main/Main';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <Logo />
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
