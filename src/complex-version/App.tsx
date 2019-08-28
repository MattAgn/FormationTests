import React from 'react';
import { Provider } from 'react-redux';

import { store } from './modules/store';
import { Home } from './pages/Home';
import { Toaster } from '../components/Toaster';

export const App = () => (
  <Provider store={store}>
    <Home />
    <Toaster />
  </Provider>
);
