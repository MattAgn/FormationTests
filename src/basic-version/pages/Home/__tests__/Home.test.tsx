import React from 'react';
import { fireEvent, waitForElement, render } from 'react-native-testing-library';
import fetchMock from 'fetch-mock';

import { EMAIL_API_ENDPOINT } from '../../../../complex-version/api/config';
import { Home } from '../Home';
import { wording } from '../../../../utils/wording';

describe('[Page] Home', () => {
  beforeEach(() => {
    fetchMock.reset();
  });

  it('should display succesful message on successful subscribe', async () => {});
});
