import React, { FunctionComponent } from 'react';
import { TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';

interface Props extends TouchableOpacityProps {
  title: string;
}

export const Button: FunctionComponent<Props> = ({ title, ...touchableOpacityProps }) => (
  <FullWidthTouchableOpacity {...touchableOpacityProps}>
    <ButtonContainer>
      <ButtonText>{title}</ButtonText>
    </ButtonContainer>
  </FullWidthTouchableOpacity>
);

const FullWidthTouchableOpacity = styled.TouchableOpacity`
  width: 100%;
`;

const ButtonContainer = styled.View`
  background-color: green;
  border-radius: 6;
  /* text-align: center; */
  padding-vertical: 10;
  align-items: center;
  color: white;
  margin-vertical: 20;
`;

const ButtonText = styled.Text`
  color: white;
`;
