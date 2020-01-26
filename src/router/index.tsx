import React from 'react';
import { Router } from '@reach/router';
import loadable from 'react-loadable';
import Loader from 'elements/loader';

const Home = loadable({
  loader: () => import('pages/home'),
  loading: Loader,
  timeout: 10000,
});

export const RouterView = () =>
  <Router>
    <Home default={ true } path='/' />
  </Router>
;
