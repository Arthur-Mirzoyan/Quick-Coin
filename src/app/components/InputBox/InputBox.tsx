import React, { ReactNode, useState } from 'react';
import { View, Text, TextInput, StyleProp, TextStyle, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { variables } from '@styles/base/variables';
import { styles } from './InputBox.style';
import { KeyboardEnum } from '@enums/Keyboard.enum';

type InputBoxProps = {
  title?: string;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  keyboard?: KeyboardEnum;
  icon?: { left?: ReactNode; right?: ReactNode };
  isPassword?: boolean;
  visibilityIcon?: boolean;
  visibilityIconColor?: string;
  readonly?: boolean;
  maxLength?: number;
  style?: {
    title?: StyleProp<TextStyle>;
    input?: StyleProp<TextStyle>;
    box?: StyleProp<ViewStyle>;
    inputBox?: StyleProp<ViewStyle>;
  };
  getInputValue?: (text: string) => unknown;
};

export function InputBox(props: InputBoxProps) {
  const [isSecure, setIsSecure] = useState(props.isPassword || false);

  return (
    <View style={[styles.box, props.style?.box]}>
      {props.title && <Text style={[styles.title, props.style?.title]}>{props.title}</Text>}
      <View style={[styles.input_box, props.style?.inputBox]}>
        {props.icon?.left}
        <TextInput
          style={[styles.input, props.style?.input]}
          keyboardType={props.keyboard}
          defaultValue={props.defaultValue}
          value={props.value}
          onChangeText={(text) => props.getInputValue?.(text)}
          secureTextEntry={isSecure}
          placeholder={props.placeholder}
          readOnly={props.readonly}
          maxLength={props.maxLength}
        />
        {props.visibilityIcon && (
          <Ionicons
            name={isSecure ? 'eye-off-sharp' : 'eye'}
            size={24}
            color={props.visibilityIconColor || variables.colors.primary}
            onPress={() => setIsSecure((prev) => !prev)}
          />
        )}
        {props.icon?.right}
      </View>
    </View>
  );
}
