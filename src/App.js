import React, { useState } from 'react';
import { Provider, atom, useAtom } from 'jotai';
import './styles/App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Components/UI/navbar';
import AppRouter from './Components/AppRouter';
import { AuthContext } from './context';

const App = () => {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <Provider>
      <AuthContext.Provider value={
        { isAuth, setIsAuth }
      }
      >
        <BrowserRouter>
          <Navbar />
          <AppRouter />
        </BrowserRouter>
      </AuthContext.Provider>
    </Provider>
  );
};

export default App;
