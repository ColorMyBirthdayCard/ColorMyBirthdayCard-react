import React from 'react';
import styled from 'styled-components';

import Routes from '@routes/Routes';
import { BrowserRouter } from 'react-router-dom';
import { UserContextProvider } from '@contexts/UserContext';

const ROOT = styled.div`
  width: 100%;
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
