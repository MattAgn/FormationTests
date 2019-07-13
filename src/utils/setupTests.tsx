import React, { ReactElement } from 'react';
import { IAppState } from '../modules/types';
import { watchAll } from '../modules/saga';
import { render } from 'react-native-testing-library';
import { Provider } from 'react-redux';
import { store, sagaMiddleware } from '../modules/store';
import { Toaster } from '../components/Toaster';

export const renderPage = (page: ReactElement) => {
  sagaMiddleware.run(watchAll);

  return render(
    <Provider store={store}>
      {page}
      <Toaster />
    </Provider>
  );
};
