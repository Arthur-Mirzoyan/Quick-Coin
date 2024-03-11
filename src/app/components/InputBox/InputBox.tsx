import React, { Children, PropsWithChildren } from 'react';
import { View, Text, TextInput, StyleProp, TextStyle, ViewStyle } from 'react-native';
import { styles } from './InputBox.style';
import { KeyboardEnum } from '@enums/Keyboard.enum';

type InputBoxProps = {
  title?: string;
  iconPosition?: 'left' | 'right' | 'inline';
  titleStyle?: StyleProp<TextStyle>;
  inputStyle?: StyleProp<TextStyle>;
  boxStyle?: StyleProp<ViewStyle>;
  inputBoxStyle?: StyleProp<ViewStyle>;
  keyboard?: KeyboardEnum;
  placeholder?: string;
  isPassword?: boolean;
  getInputValue?: (text: string) => unknown;
};

export function InputBox(props: PropsWithChildren<InputBoxProps>) {
  const childrenArray = Children.toArray(props.children);

  return (
    <View style={[styles.box, props.boxStyle]}>
      <Text style={props.titleStyle}>{props.title}</Text>
      <View style={[styles.input_box, props.inputBoxStyle]}>
        {props.iconPosition === 'left' && props.children}
        {props.iconPosition === 'inline' && childrenArray[0]}
        <TextInput
          style={[styles.input, props.inputStyle]}
          keyboardType={props.keyboard}
          onChangeText={(text) => props.getInputValue?.(text)}
          secureTextEntry={props.isPassword}
          placeholder={props.placeholder}
        />
        {props.iconPosition === 'right' && props.children}
        {props.iconPosition === 'inline' && childrenArray[1]}
      </View>
    </View>
  );
}

InputBox.propTypes = {
  children: function (props: any, propName: any) {
    if (React.Children.count(props[propName]) > 2) {
      return new Error(`Should have at most 2 children.`);
    }
  },
};
