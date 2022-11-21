import React from 'react';
import styled from 'styled-components';

import Routes from '@routes/Routes';
import { BrowserRouter } from 'react-router-dom';
import { UserContextProvider } from '@contexts/UserContext';

const ROOT = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  overflow-x: hidden;
`;

const App = () => (
  <UserContextProvider>
    <BrowserRouter>
      <ROOT>
        <Routes />
      </ROOT>
    </BrowserRouter>
  </UserContextProvider>
);

export default App;
