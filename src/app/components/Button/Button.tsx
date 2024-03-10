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
  iconPosition?: 'top' | 'right' | 'bottom' | 'left';
}

export function Button(props: PropsWithChildren<ButtonProps>) {
  return (
    <Pressable onPress={props.onPress} style={[styles.button, props.buttonStyle]}>
      {props.iconVisible && props.iconPosition === 'top' && props.children}
      <Text style={[styles.text, props.textStyle]}>{props.title}</Text>
      {props.iconVisible && props.iconPosition === 'bottom' && props.children}

      {props.iconVisible && props.iconPosition === 'right' && <View style={styles.icon_right}>{props.children}</View>}
      {props.iconVisible && props.iconPosition === 'left' && <View style={styles.icon_left}>{props.children}</View>}
    </Pressable>
  );
}
