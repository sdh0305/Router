import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Main from './pages/Main';

const App = () =>{
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='main/*' element={<Main />} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App;
