import React from 'react';
import { fireEvent, waitForElement, render } from 'react-native-testing-library';
import fetchMock from 'fetch-mock';

import { EMAIL_API_ENDPOINT } from '../../../../complex-version/api/config';
import { Home } from '../Home';
import { wording } from '../../../../utils/wording';
import { getPropsWithNavigation } from '../../../../utils/test.helper';
import { Routes } from '../../../../complex-version/navigation/routes';

describe('[Page] Home', () => {
  const props = getPropsWithNavigation();

  beforeEach(() => {
    fetchMock.reset();
  });

  it('should display succesful message on successful subscribe', async () => {
    // Setup
    fetchMock.post(EMAIL_API_ENDPOINT, 200);
    const page = render(<Home {...props} />);
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

  it('should navigate to about page on about button press', async () => {
    const page = render(<Home {...props} />);
    const AboutButton = page.getByText(wording.about);
    fireEvent.press(AboutButton);
    expect(props.navigation.navigate).toHaveBeenCalledWith(Routes.About);
  });
});
