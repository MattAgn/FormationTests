import React from 'react';
import { fireEvent, waitForElement, flushMicrotasksQueue } from 'react-native-testing-library';
import fetchMock from 'fetch-mock';
import 'jest-styled-components';

import { Home } from '../Home';
import { renderPage, getPropsWithNavigation } from '../../../utils/tests/helpers';
import { EMAIL_API_ENDPOINT } from '../../../api/config';
import { wording } from '../../../utils/wording';

describe('[Page] Home', () => {
  const props = getPropsWithNavigation();
  const mockPostSubscribe = (status: number) => fetchMock.post(EMAIL_API_ENDPOINT, status);

  beforeEach(() => {
    fetchMock.reset();
  });

  it('should display succesful message on successful subscription', async () => {
    // SETUP
    mockPostSubscribe(200);
    const page = renderPage(<Home {...props} />);
    // GIVEN
    const EmailInput = page.getByPlaceholder(wording.emailPlaceholder);
    const ValidateButton = page.getByText(wording.validateEmail);
    // WHEN
    fireEvent.changeText(EmailInput, 'hello@bam.com');
    fireEvent.press(ValidateButton);
    // THEN
    const SuccessMessage = await waitForElement(() =>
      page.queryByText(wording.subscriptionSuccessful)
    );
    expect(SuccessMessage).toBeTruthy();
  });

  it('should display error message on failed subscription', async () => {
    // SETUP
    mockPostSubscribe(400);
    const page = renderPage(<Home {...props} />);
    // GIVEN
    const EmailInput = page.getByPlaceholder(wording.emailPlaceholder);
    const ValidateButton = page.getByText(wording.validateEmail);
    // WHEN
    fireEvent.changeText(EmailInput, 'hello@bamom');
    fireEvent.press(ValidateButton);
    // THEN
    const ErrorMessage = await waitForElement(() => page.queryByText(wording.basicError));
    expect(ErrorMessage).toBeTruthy();
  });
});
