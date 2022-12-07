import React from 'react';
import { Route, Routes as ReactRoutes } from 'react-router-dom';

import Home from '@pages/Home';
import Login from '@pages/Login';
import Register from '@pages/Register';
import Main from "@pages/Main";

const Routes = () => (
  <ReactRoutes>
      <Route index element={<Main />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
  </ReactRoutes>
);

export default Routes;
