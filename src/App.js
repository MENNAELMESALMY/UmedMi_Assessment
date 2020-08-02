import React, { useState } from  'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Container/Home'
import { Card } from 'antd';

function App() {
  const [Patients,setPatients]= useState([
    {
        Name:"Ahmed",
        Gender:"Male",
        Age:28
    },{
        Name:"Sarah",
        Gender:"Female",
        Age:22
    },{
        Name:"Kamal",
        Gender:"Male",
        Age:31
    }
  ]);
  return (
    <BrowserRouter>
    <div>
    <Card  
    title="UmedMi Patients"
    className="CardTiltle" 
    headStyle={{color: '#41085c',fontSize:28+'px',fontWeight:700 ,boxShadow: '0 3px 6px rgba(79,43,121,.37)'}}>
    <Route exact path='/' component={(props) => <Home  {...props} Patients={Patients}/>}/> 
   </Card>
    </div>
    </BrowserRouter>
  );
}

export default App;
