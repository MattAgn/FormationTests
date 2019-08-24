import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import styled from 'styled-components/native';
import wretch from 'wretch';
import { Button } from '../../components/Button';
import { wording } from '../../utils/wording';
import { validate } from '@babel/types';

export const Home = () => {
  const [email, setEmail] = useState('');
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  const onValidate = () => {
    wretch('https://staging.inshallah.com/auth/send-validation-email')
      .post({ email })
      .res()
      .then(() => setIsSuccess(true))
      .catch(() => setIsSuccess(false));
  };

  return (
    <Container>
      <Title>{wording.subscribe}</Title>
      <TextInput placeholder={wording.emailPlaceholder} value={email} onChangeText={setEmail} />
      <Button title={wording.validateEmail} onPress={onValidate} />
      {isSuccess && <SuccessMessage>{wording.emailSent}</SuccessMessage>}
      {isSuccess === false && <ErrorMessage>{wording.basicError}</ErrorMessage>}
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  padding-top: 30;
  padding-horizontal: 20;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 20;
  margin-vertical: 20px;
`;

const SuccessMessage = styled.Text`
  color: green;
`;

const ErrorMessage = styled.Text`
  color: red;
`;
