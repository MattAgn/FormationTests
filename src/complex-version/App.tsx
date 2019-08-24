import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store, sagaMiddleware } from './modules/store';
import { Home } from './pages/Home';
import { Toaster } from '../components/Toaster';
import watchAll from './modules/saga';

export const App = () => (
  <Provider store={store}>
    <Home />
    <Toaster />
  </Provider>
);
