import React from 'react';
import 'jest-styled-components';
import { fireEvent, waitForElement } from 'react-native-testing-library';
import fetchMock from 'fetch-mock';

import { Home } from '../Home';
import { renderPage } from '../../../utils/test.helper';
import { EMAIL_API_ENDPOINT } from '../../api/config';
import { wording } from '../../../utils/wording';

describe('[Page] Home', () => {
  beforeEach(() => {
    fetchMock.reset();
  });

  it('should display succesful message on successful subscribe', async () => {
    // Setup
    fetchMock.post(EMAIL_API_ENDPOINT, 200);
    const page = renderPage(<Home />);
    // What the user sees
    const EmailInput = page.getByPlaceholder(wording.emailPlaceholder);
    const ValidateButton = page.getByText(wording.validateEmail);
    // What the user does
    fireEvent.changeText(EmailInput, 'hello@bam.co');
    fireEvent.press(ValidateButton);
    // What feedback the user should expect
    const SuccessMessage = await waitForElement(() =>
      page.queryByText(wording.subscriptionSuccessful)
    );
    expect(SuccessMessage).toBeTruthy();
  });

  it('should display error message on failed subscribe', async () => {
    // Setup
    fetchMock.post(EMAIL_API_ENDPOINT, 400);
    const page = renderPage(<Home />);
    // What the user sees
    const EmailInput = page.getByPlaceholder(wording.emailPlaceholder);
    const ValidateButton = page.getByText(wording.validateEmail);
    // What the user does
    fireEvent.changeText(EmailInput, 'hellobam.co');
    fireEvent.press(ValidateButton);
    // What feedback the user should expect
    const ErrorMessage = await waitForElement(() => page.queryByText(wording.basicError));
    expect(ErrorMessage).toBeTruthy();
  });
});
