import React from 'react';
import { Provider } from 'react-redux';
import { store } from './modules/store';
import { HomeFinal } from './pages/Home/Home.final';
import { Toaster } from './components/Toaster';

export const AppFinal = () => (
  <Provider store={store}>
    <HomeFinal />
    <Toaster />
  </Provider>
);
