import React from 'react';
import styled from 'styled-components';

import Routes from '@routes/Routes';

const ROOT = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  overflow-x: hidden;
`;

const App = () => (
  <ROOT>
    <Routes />
  </ROOT>
);

export default App;
