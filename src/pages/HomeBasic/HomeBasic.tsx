import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styled from 'styled-components/native';
import wretch from 'wretch';

export const HomeBasic = () => {
  const [email, setEmail] = useState('');
  const [hasFailed, setHasFailed] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const onValidate = () => {
    wretch('https://staging.inshallah.com/auth/send-validation-email')
      .post({ email })
      .res()
      .then(() => setIsSuccess(true))
      .catch(() => setHasFailed(true));
  };

  return (
    <Container>
      <Title>Subscribe to our newsletter</Title>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <Button title="Valider" onPress={onValidate} />
      {isSuccess && <Text>Email sent !</Text>}
      {hasFailed && <Text>Email sent !</Text>}
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 20;
  margin-vertical: 20px;
`;
