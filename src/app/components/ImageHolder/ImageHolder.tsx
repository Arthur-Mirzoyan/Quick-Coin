import React from 'react';
import {
  GestureResponderEvent,
  Image,
  ImageSourcePropType,
  ImageStyle,
  Pressable,
  StyleProp,
  ViewStyle,
} from 'react-native';

type ImageHolderProps = {
  expectedUri: string;
  defaultSource: ImageSourcePropType;
  style: StyleProp<ImageStyle>;
  boxStyle?: StyleProp<ViewStyle>;
  onPress?: (event: GestureResponderEvent) => void;
};

export function ImageHolder({ expectedUri, defaultSource, style, boxStyle, onPress }: ImageHolderProps) {
  return (
    <Pressable onPress={onPress} style={boxStyle}>
      {expectedUri ? (
        <Image source={{ uri: expectedUri }} style={style} />
      ) : (
        <Image source={defaultSource} style={style} />
      )}
    </Pressable>
  );
}
