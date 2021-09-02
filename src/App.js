import React from 'react';
import './styles/App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Components/UI/navbar';
import AppRouter from './Components/AppRouter';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <AppRouter />
  </BrowserRouter>
);

export default App;
