import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { useState } from 'react';
import { Items } from './components/Items';

const App =() =>{

      return (
    <div className="wrapper">
  <Header />
  <Items/>
  <Footer/>
    </div>
  );
}


export default App;
