import React from 'react';
import 'jest-styled-components';
import { fireEvent, waitForElement, render } from 'react-native-testing-library';
import fetchMock from 'fetch-mock';

import { EMAIL_API_ENDPOINT } from '../../../api/config';
import { Home } from '../Home';

describe('[Page] Home', () => {
  beforeEach(() => {
    fetchMock.reset();
  });

  it('should display error message on failed subscribe', async () => {
    // Setup
    fetchMock.post(EMAIL_API_ENDPOINT, 400);
    const page = render(<Home />);
    const { getByPlaceholder, queryByText, getByText } = page;
    // What the user sees
    const EmailInput = getByPlaceholder('Email');
    const ValidateButton = getByText('Validate');
    // What the user does
    fireEvent.changeText(EmailInput, 'hellobam.co');
    fireEvent.press(ValidateButton);
    // What feedback the user will see
    const ErrorMessage = await waitForElement(() => queryByText('Oups something went wrong...'));
    expect(page).toMatchSnapshot();
    expect(ErrorMessage).toBeTruthy();
  });

  it('should display succesful message on successful subscribe', async () => {
    // Setup
    fetchMock.post(EMAIL_API_ENDPOINT, 200);
    const { getByPlaceholder, queryByText, getByText } = render(<Home />);
    // What the user sees
    const EmailInput = getByPlaceholder('Email');
    const ValidateButton = getByText('Validate');
    // What the user does
    fireEvent.changeText(EmailInput, 'hello@bam.co');
    fireEvent.press(ValidateButton);
    // What feedback the user should expect
    const SuccessMessage = await waitForElement(() => queryByText('Email sent !'));
    expect(SuccessMessage).toBeTruthy();
  });
});
