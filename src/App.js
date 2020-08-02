import React from  'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Container/Home'
import AddPatient from './components/Container/AddPatient'
import { Card } from 'antd';

function App() {
  return (
    <BrowserRouter>
    <div>
    <Card  
    title="UmedMi Patients"
    headStyle={{color: '#41085c',fontSize:28+'px',fontWeight:700 ,boxShadow: '0 3px 6px rgba(79,43,121,.37)'}}>
    <Route exact path='/' component={Home}/> 
    <Route exact path='/AddPatient' component={AddPatient}/> 
   </Card>
    </div>
    </BrowserRouter>
  );
}

export default App;
