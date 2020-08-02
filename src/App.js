import React from  'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Container/Home'
import { Card } from 'antd';

function App() {
  return (
    <BrowserRouter>
    <div>
    <Card  
    title="UmedMi Patients"
    className="CardTiltle" 
    headStyle={{color: '#41085c',fontSize:28+'px',fontWeight:700 ,boxShadow: '0 3px 6px rgba(79,43,121,.37)'}}>
    <Route exact path='/' component={Home}/> 
   </Card>
    </div>
    </BrowserRouter>
  );
}

export default App;
