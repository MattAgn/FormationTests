import React from 'react';
import 'jest-styled-components';
import { fireEvent, waitForElement } from 'react-native-testing-library';
import fetchMock from 'fetch-mock';

import { HomeFinal } from '../Home.final';
import { renderPage } from '../../../utils/setupTests';
import { EMAIL_API_ENDPOINT } from '../../../api/config';

describe('[Page] Home', () => {
  beforeEach(() => {
    fetchMock.reset();
  });

  it('should display error message on failed subscribe', async () => {
    // Setup
    fetchMock.post(EMAIL_API_ENDPOINT, 400);
    const page = renderPage(<HomeFinal />);
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
    const page = renderPage(<HomeFinal />);
    const { getByPlaceholder, queryByText, getByText } = page;
    // What the user sees
    const EmailInput = getByPlaceholder('Email');
    const ValidateButton = getByText('Validate');
    // What the user does
    fireEvent.changeText(EmailInput, 'hello@bam.co');
    fireEvent.press(ValidateButton);
    // What feedback the user will see
    const SuccessMessage = await waitForElement(() => queryByText('Email sent !'));
    expect(page).toMatchSnapshot();
    expect(SuccessMessage).toBeTruthy();
  });
});
