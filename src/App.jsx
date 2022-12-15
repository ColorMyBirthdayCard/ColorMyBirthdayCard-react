import React from 'react';
import './App.css';
import Routes from '@routes/Routes';
import { BrowserRouter } from 'react-router-dom';
import { UserContextProvider } from '@contexts/UserContext';

const App = () => (
  <UserContextProvider>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </UserContextProvider>
);

export default App;
