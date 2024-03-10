import React, { PropsWithChildren } from 'react';
import { Pressable, Text, GestureResponderEvent, StyleProp, ViewStyle, TextStyle, View } from 'react-native';
import { styles } from './Button.style';

import { ButtonIconPositionEnum } from '@src/app/enums/ButtonIconPosition.enum';

interface ButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;

  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;

  iconVisible?: boolean;
  iconPosition?: ButtonIconPositionEnum;
}

export function Button(props: PropsWithChildren<ButtonProps>) {
  return (
    <Pressable onPress={props.onPress} style={[styles.button, props.buttonStyle]}>
      {props.iconVisible && props.iconPosition === ButtonIconPositionEnum.Top && props.children}
      <Text style={[styles.text, props.textStyle]}>{props.title}</Text>
      {props.iconVisible && props.iconPosition === ButtonIconPositionEnum.Bottom && props.children}

      {props.iconVisible && props.iconPosition === ButtonIconPositionEnum.Right && (
        <View style={props.iconPosition === ButtonIconPositionEnum.Right ? styles.icon_right : null}>{props.children}</View>
      )}
      {props.iconVisible && props.iconPosition === ButtonIconPositionEnum.Left && (
        <View style={props.iconPosition === ButtonIconPositionEnum.Left ? styles.icon_left : null}>{props.children}</View>
      )}
    </Pressable>
  );
}
