import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import Menu from './components/Menu';
import Testimonios from './components/Testimonios';
import Footer from './components/Footer';
import AcercaDe from './components/AcercaDe';




function App() {
  return (
    <>
      <Nav />
      <Main />
      <Menu />
      <Testimonios />
      <AcercaDe />
      <Footer />
    </>
  );
}

export default App;
