import React from 'react';
import { Route, Routes as ReactRoutes } from 'react-router-dom';

import Home from '@pages/Home';
import Login from '@pages/Login';

const Routes = () => (
  <ReactRoutes>
    <Route index element={<Home />} />
    <Route path="/login" element={<Login />} />
  </ReactRoutes>
);

export default Routes;
