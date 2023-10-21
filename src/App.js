import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { useState } from 'react';
import { Items } from './components/Items';
import { OrdersProvider } from './components/OrdersProvider';
import { Categories } from './components/Categories';

const App =() =>{

      return (
    <div className="wrapper">
      <OrdersProvider>
  <Header />
  <Categories/>
  <Items/>
  <Footer/>
  </OrdersProvider>
    </div>
  );
}


export default App;
