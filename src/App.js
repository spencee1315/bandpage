import './App.css';
import React, { Fragment } from 'react';

// importing components
import { Navbar } from './components/Navbar';
import { Header } from './components/Header';
import { Show } from './components/Show';
import { Footer } from './components/Footer';
import { Social } from './components/Social';

function App() {
 return (
  <Fragment>
      <div id="showcase">
        <Navbar />
        <Header />
      </div>
      <Show />
      <Social />
      <Footer />
  </Fragment>
 );
}

export default App;
