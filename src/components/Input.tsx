import { handleTextInput } from 'react-native-formik';
//@ts-ignore
import BamTextInput from '@bam.tech/react-native-component-text-input';

import React, { createRef, PureComponent, RefObject } from 'react';
import { TextInput, TextInputProps } from 'react-native-paper';
import styled from 'styled-components/native';

// const StyledPaperTextInput = styled(TextInput).attrs({
//   theme: ({ theme }: any) => ({
//     colors: {
//       primary: theme.colors.primary,
//     },
//     fonts: {
//       regular: theme.font.type.inputNew.family,
//     },
//   }),
// })`
//   background-color: transparent;
// `;

// export class BamInput extends PureComponent<TextInputProps> {
//   private input: RefObject<TextInput> = createRef<TextInput>();

//   public focus() {
//     if (this.input.current) this.input.current.focus();
//   }

//   public isFocused() {
//     if (this.input.current) return this.input.current.isFocused();

//     return false;
//   }

//   public render() {
//     return (
//       <BamTextInput {...this.props} ref={this.input} TextInputComponent={StyledPaperTextInput} />
//     );
//   }
// }

export const Input = handleTextInput(BamTextInput);
