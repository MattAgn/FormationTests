import React, { ReactElement } from 'react';
import { render } from 'react-native-testing-library';
import { Provider } from 'react-redux';
import { NavigationScreenProps } from 'react-navigation';

import { sagaMiddleware } from '../complex-version/modules/store';
import { Toaster } from '../components/Toaster';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../complex-version/modules/reducer';
import watchAll from '../complex-version/modules/saga';

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

export const getPropsWithNavigation = (
  props?: any,
  navigationPropExtension?: any
): NavigationScreenProps =>
  ({
    ...props,
    navigation: {
      navigate: jest.fn(),
      ...navigationPropExtension,
    },
  } as any);
