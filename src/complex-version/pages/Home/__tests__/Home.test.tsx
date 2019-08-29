import React from 'react';
import { fireEvent, waitForElement, flushMicrotasksQueue } from 'react-native-testing-library';
import fetchMock from 'fetch-mock';

import { Home } from '../Home';
import { renderPage, getPropsWithNavigation } from '../../../../utils/test.helper';
import { EMAIL_API_ENDPOINT } from '../../../api/config';
import { wording } from '../../../../utils/wording';
import { Routes } from '../../../navigation/routes';

describe('[Page] Home', () => {
  const props = getPropsWithNavigation();

  beforeEach(() => {
    fetchMock.reset();
  });

  it('should display succesful message on successful subscribe', async () => {});

  it('should navigate to about page on about button press', async () => {});
});
