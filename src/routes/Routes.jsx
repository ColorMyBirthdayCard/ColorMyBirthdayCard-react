import React from 'react';
import { Route, Routes as ReactRoutes } from 'react-router-dom';

import Home from '@pages/Home';
import Login from '@pages/Login';
import Register from '@pages/Register';

const Routes = () => (
  <ReactRoutes>
    <Route index element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
  </ReactRoutes>
);

export default Routes;
