//@ts-ignore
import { ToastStyles } from 'react-native-toaster';
import { ActionsUnion, createAction } from '@martin_hotell/rex-tils';
import { ToasterActionTypes } from './types';
import { theme } from '../../utils/theme';

const TOASTER_DURATION = 3000;

export const ToasterActions = {
  showErrorMessage: (message: string) =>
    createAction(ToasterActionTypes.ADD_TOAST, {
      text: message,
      duration: TOASTER_DURATION,
      styles: {
        container: { ...ToastStyles.error.container, backgroundColor: theme.colors.red },
        text: {
          ...ToastStyles.text,
          fontSize: 13,
          lineHeight: 16,
          color: '#fff',
        },
      },
    }),
  showSuccessMessage: (message: string) =>
    createAction(ToasterActionTypes.ADD_TOAST, {
      text: message,
      duration: TOASTER_DURATION,
      styles: {
        container: {
          ...ToastStyles.error.container,
          backgroundColor: theme.colors.darkGreen,
        },
        text: {
          ...ToastStyles.text,
          fontSize: 13,
          lineHeight: 16,
          color: '#fff',
        },
      },
    }),
};

export type TToasterActionObjectTypes = ActionsUnion<typeof ToasterActions>;
