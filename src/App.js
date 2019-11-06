import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Client from './components/order/Client';
import SumaryOrder from './components/order/Order'

function App() {
  return (
    <div className="container">
     <div class="row">
       <div class="col-sm-12 text-center">
         <Header/>
      </div>    
     </div>
    <div class="row">
      <div class="col-sm-8">Hola</div>
      <div class="col-sm-4">
          <div className='col-md-10'>
          <Client/> 
          </div>        
        <div className='mt-3'>
        <SumaryOrder/> </div>   
      </div>        
    </div> 
    </div>
  );
}

export default App;
