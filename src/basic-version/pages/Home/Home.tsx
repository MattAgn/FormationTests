import React, { useState, FunctionComponent } from 'react';
import styled from 'styled-components/native';
import wretch from 'wretch';

import { Button } from '../../../components/Button';
import { wording } from '../../../utils/wording';
import { EMAIL_API_ENDPOINT } from '../../../complex-version/api/config';
import { Container, Card, Title, Input } from '../../../components/StyledComponents';
import { NavigationScreenProps } from 'react-navigation';
import { Routes } from '../../../complex-version/navigation/routes';

export const Home: FunctionComponent<NavigationScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  const onValidate = () => {
    wretch(EMAIL_API_ENDPOINT)
      .post({ email })
      .res()
      .then(() => setIsSuccess(true))
      .catch(() => setIsSuccess(false));
  };

  const onAbout = () => navigation.navigate(Routes.About);

  return (
    <Container>
      <Card>
        <Title>{wording.subscribe}</Title>
        <Input placeholder={wording.emailPlaceholder} value={email} onChangeText={setEmail} />
        <Button title={wording.validateEmail} onPress={onValidate} />
        <Button title={wording.about} onPress={onAbout} />
        {isSuccess && <SuccessMessage>{wording.subscriptionSuccessful}</SuccessMessage>}
        {isSuccess === false && <ErrorMessage>{wording.basicError}</ErrorMessage>}
      </Card>
    </Container>
  );
};

const SuccessMessage = styled.Text`
  color: green;
`;

const ErrorMessage = styled.Text`
  color: red;
`;
