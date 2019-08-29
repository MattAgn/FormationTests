import React from 'react';
import { fireEvent, waitForElement, flushMicrotasksQueue } from 'react-native-testing-library';
import fetchMock from 'fetch-mock';

import { Home } from '../Home';
import { renderPage } from '../../../utils/test.helper';
import { EMAIL_API_ENDPOINT } from '../../api/config';
import { wording } from '../../../utils/wording';

describe('[Page] Home', () => {
  beforeEach(() => {
    fetchMock.reset();
  });

  it('should display succesful message on successful subscribe', async () => {});
});
