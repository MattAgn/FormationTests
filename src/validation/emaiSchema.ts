import Yup from 'yup';

export const EmailValidationSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .email('Email.invalid_email')
    .required('Email.invalid_email'),
});
