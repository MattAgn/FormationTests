import React from 'react';
import { Provider } from 'react-redux';

import { store } from './modules/store';
import { Toaster } from '../components/Toaster';
import { AppContainer } from '../navigation';

export const App = () => (
  <Provider store={store}>
    <AppContainer />
    <Toaster />
  </Provider>
);
