import React, { ReactElement } from 'react';
import { render } from 'react-native-testing-library';
import { Provider } from 'react-redux';
import { store } from '../modules/store';
import { Toaster } from '../components/Toaster';

export const renderPage = (page: ReactElement) =>
  render(
    <Provider store={store}>
      {page}
      <Toaster />
    </Provider>
  );
