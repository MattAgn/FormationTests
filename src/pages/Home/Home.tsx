import React, { useState } from 'react';
import styled from 'styled-components/native';
import wretch from 'wretch';

import { Button } from '../../components/Button';
import { wording } from '../../utils/wording';
import { EMAIL_API_ENDPOINT } from '../../api/config';
import { Container, Card, Title, Input } from '../../components/StyledComponents';

export const Home = () => {
  const [email, setEmail] = useState('');
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  const onValidate = () => {
    wretch(EMAIL_API_ENDPOINT)
      .post({ email })
      .res()
      .then(() => setIsSuccess(true))
      .catch(() => setIsSuccess(false));
  };

  return (
    <Container>
      <Card>
        <Title>{wording.subscribe}</Title>
        <Input placeholder={wording.emailPlaceholder} value={email} onChangeText={setEmail} />
        <Button title={wording.validateEmail} onPress={onValidate} />
        {isSuccess && <SuccessMessage>{wording.emailSent}</SuccessMessage>}
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
