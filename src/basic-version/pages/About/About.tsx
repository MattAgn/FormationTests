import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { Button } from '../../../components/Button';
import { wording } from '../../../utils/wording';
import { Container, Card, Title, Input } from '../../../components/StyledComponents';
import { NavigationScreenProps } from 'react-navigation';
import { Routes } from '../../../complex-version/navigation/routes';

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
