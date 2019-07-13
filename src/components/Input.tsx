import { handleTextInput } from 'react-native-formik';
//@ts-ignore
import BamTextInput from '@bam.tech/react-native-component-text-input';
import { TextInput } from 'react-native';

export const Input = handleTextInput(TextInput);
