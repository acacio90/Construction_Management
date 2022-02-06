import './Style';
import React from 'react';
import Header from '../Header/Header';

function Main(props) {
  return (
    <React.Fragment>
      <Header />
      <main className="content"></main>
    </React.Fragment>
  );
}

export default Main;
