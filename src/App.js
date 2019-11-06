import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Client from './components/order/Client';
import Product from './components/menu/Products';
import Menu from './components/menu/Menu';
import SubMenu from './components/menu/SubMenu';

function App() {
  return (
    <div className="App">
      <Header/>
      <Client/>
      <Menu/>
      <SubMenu/>
      <Product/>
    </div>
  );
}

export default App;
