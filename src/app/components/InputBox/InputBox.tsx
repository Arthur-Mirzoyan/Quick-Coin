import React, { Children, PropsWithChildren } from 'react';
import { View, Text, TextInput, StyleProp, TextStyle, ViewStyle } from 'react-native';
import { styles } from './InputBox.style';
import { KeyboardEnum } from '@enums/Keyboard.enum';

type InputBoxProps = {
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  title?: string;
  iconPosition?: 'left' | 'right' | 'inline';
  titleStyle?: StyleProp<TextStyle>;
  inputStyle?: StyleProp<TextStyle>;
  boxStyle?: StyleProp<ViewStyle>;
  inputBoxStyle?: StyleProp<ViewStyle>;
  keyboard?: KeyboardEnum;
  isPassword?: boolean;
  readonly?: boolean;
  getInputValue?: (text: string) => unknown;
};

export function InputBox(props: PropsWithChildren<InputBoxProps>) {
  const childrenArray = Children.toArray(props.children);

  return (
    <View style={[styles.box, props.boxStyle]}>
      <Text style={[styles.title, props.titleStyle]}>{props.title}</Text>
      <View style={[styles.input_box, props.inputBoxStyle]}>
        {props.iconPosition === 'left' && props.children}
        {props.iconPosition === 'inline' && childrenArray[0]}
        <TextInput
          style={[styles.input, props.inputStyle]}
          keyboardType={props.keyboard}
          defaultValue={props.defaultValue}
          value={props.value}
          onChangeText={(text) => props.getInputValue?.(text)}
          secureTextEntry={props.isPassword}
          placeholder={props.placeholder}
          readOnly={props.readonly}
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
