import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store, sagaMiddleware } from './modules/store';
import { HomeFinal } from './pages/Home/Home.final';
import { Toaster } from './components/Toaster';
import watchAll from './modules/saga';

export const AppFinal = () => (
  <Provider store={store}>
    <HomeFinal />
    <Toaster />
  </Provider>
);
