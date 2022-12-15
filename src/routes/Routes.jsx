import React from 'react';
import { Route, Routes as ReactRoutes } from 'react-router-dom';

import Home from '@pages/Home/Home';
import Login from '@pages/Auth/Login';
import Register from '@pages/Auth/Register';
import Main from '@pages/Main';
import Sub1 from '@pages/ColorLetter/Sub1';
import Sub2 from '@pages/ColorLetter/Sub2';
import Sub3 from '@pages/ColorLetter/Sub3';

const Routes = () => (
  <ReactRoutes>
    <Route index element={<Main />} />
    <Route path='/home' element={<Home />} />
    <Route path='/login' element={<Login />} />
    <Route path='/register' element={<Register />} />
    <Route path='/sub1' element={<Sub1 />} />
    <Route path='/sub2' element={<Sub2 />} />
    <Route path='/sub3' element={<Sub3 />} />
  </ReactRoutes>
);

export default Routes;
