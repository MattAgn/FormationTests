import React from 'react';
import {
  fireEvent,
  waitForElement,
  render,
  flushMicrotasksQueue,
} from 'react-native-testing-library';
import fetchMock from 'fetch-mock';

import { EMAIL_API_ENDPOINT } from '../../../../complex-version/api/config';
import { Home } from '../Home';
import { wording } from '../../../../utils/wording';
import { getPropsWithNavigation } from '../../../../utils/test.helper';
import { Routes } from '../../../navigation/routes';

describe('[Page] Home', () => {
  const props = getPropsWithNavigation();

  beforeEach(() => {
    fetchMock.reset();
  });

  it('should display succesful message on successful subscribe', async () => {});

  it('should navigate to about page on about button press', async () => {});
});
