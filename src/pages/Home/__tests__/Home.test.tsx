import React from 'react';
import { fireEvent, waitForElement } from 'react-native-testing-library';
import { HomeFinal } from '../Home.final';
import fetchMock from 'fetch-mock';
import { renderPage } from '../../../utils/setupTests';

describe('[Page] Home', () => {
  beforeEach(() => {
    fetchMock.reset();
  });

  it('should display succesful message on successful subscribe', async () => {
    // Setup
    fetchMock.post('https://staging.inshallah.com/auth/send-validation-email', 200);
    const { getByPlaceholder, queryByText, getByText } = renderPage(<HomeFinal />);
    // What the user sees
    const EmailInput = getByPlaceholder('Email');
    const ValidateButton = getByText('Validate');
    // What the user does
    fireEvent.changeText(EmailInput, 'hello@bam.co');
    fireEvent.press(ValidateButton);
    // What feedback the user will see
    const SuccessMessage = await waitForElement(() => queryByText('Email sent !'));
    expect(SuccessMessage).toBeTruthy();
  });

  it('should display error message on failed subscribe', async () => {
    // Setup
    fetchMock.post('https://staging.inshallah.com/auth/send-validation-email', 400);
    const { getByPlaceholder, queryByText, getByText } = renderPage(<HomeFinal />);
    // What the user sees
    const EmailInput = getByPlaceholder('Email');
    const ValidateButton = getByText('Validate');
    // What the user does
    fireEvent.changeText(EmailInput, 'hellobam.co');
    fireEvent.press(ValidateButton);
    // What feedback the user will see
    const ErrorMessage = await waitForElement(() => queryByText('Oups something went wrong...'));
    expect(ErrorMessage).toBeTruthy();
    expect(ErrorMessage).toMatchSnapshot();
  });
});
