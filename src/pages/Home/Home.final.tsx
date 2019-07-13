import React from 'react';
import styled from 'styled-components/native';
import { Button } from '../../components/Button';
import { useDispatch } from 'react-redux';
import { SignUpActions } from '../../modules/signup/actions';
import { Formik } from 'formik';
import { Input } from '../../components/Input';

interface EmailValue {
  email: string;
}

export const HomeFinal = () => {
  const dispatch = useDispatch();

  const onSubmit = ({ email }: EmailValue) => dispatch(SignUpActions.subscribeNewsletter(email));

  return (
    <Container>
      <Title>Subscribe to our newsletter</Title>
      <Formik
        onSubmit={onSubmit}
        initialValues={{ email: '' }}
        validateOnBlur={false}
        validateOnChange={false}
        render={({ handleSubmit }) => (
          <>
            {/* 
            //@ts-ignore */}
            <Input placeholder="Email" name="email" />
            <Button title="Validate" onPress={handleSubmit} />
          </>
        )}
      />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  padding-top: 40;
  padding-horizontal: 20;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 20;
  margin-vertical: 20px;
`;
