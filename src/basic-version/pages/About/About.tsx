import React, { useState, FunctionComponent } from 'react';
import styled from 'styled-components/native';
import wretch from 'wretch';

import { Button } from '../../../components/Button';
import { wording } from '../../../utils/wording';
import { EMAIL_API_ENDPOINT } from '../../../complex-version/api/config';
import { Container, Card, Title, Input } from '../../../components/StyledComponents';
import { NavigationScreenProps } from 'react-navigation';
import { Routes } from '../../../navigation';

export const About: FunctionComponent<NavigationScreenProps> = ({ navigation }) => (
  <Container>
    <Card>
      <Title>{wording.aboutTitle}</Title>
      <Button title={wording.subscribe} onPress={() => navigation.navigate(Routes.Home)} />
    </Card>
  </Container>
);

const SuccessMessage = styled.Text`
  color: green;
`;

const ErrorMessage = styled.Text`
  color: red;
`;
