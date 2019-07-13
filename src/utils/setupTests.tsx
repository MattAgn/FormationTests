import React, { ReactElement } from 'react';
import { render } from 'react-native-testing-library';
import { Provider } from 'react-redux';
import { store, sagaMiddleware } from '../modules/store';
import { Toaster } from '../components/Toaster';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../modules/reducer';
import watchAll from '../modules/saga';

export const renderPage = (page: ReactElement) => {
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(watchAll);

  return render(
    <Provider store={store}>
      {page}
      <Toaster />
    </Provider>
  );
};
