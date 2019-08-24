import React from 'react';

import { Button } from '../../components/Button';
import { useDispatch } from 'react-redux';
import { SignUpActions } from '../../modules/signup/actions';
import { Formik } from 'formik';
import { FormikInput } from '../../components/Input';
import { wording } from '../../utils/wording';
import { Card, Container, Title } from '../../components/StyledComponents';

interface EmailValue {
  email: string;
}

export const HomeFinal = () => {
  const dispatch = useDispatch();
  const onSubmit = ({ email }: EmailValue) => dispatch(SignUpActions.subscribeNewsletter(email));

  return (
    <Container>
      <Card>
        <Title>{wording.subscribe}</Title>
        <Formik
          onSubmit={onSubmit}
          initialValues={{ email: '' }}
          validateOnBlur={false}
          validateOnChange={false}
          render={({ handleSubmit }) => (
            <>
              {/* 
              //@ts-ignore */}
              <FormikInput placeholder={wording.emailPlaceholder} name="email" />
              <Button title={wording.validateEmail} onPress={handleSubmit} />
            </>
          )}
        />
      </Card>
    </Container>
  );
};
