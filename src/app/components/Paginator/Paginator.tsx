import React from 'react';
import { View, Animated, useWindowDimensions, StyleProp, ViewStyle } from 'react-native';
import { styles } from './Paginator.style';

type PaginatorProps = {
  data: any[];
  scrollX: Animated.Value;
  style?: StyleProp<ViewStyle>;
};

export function Paginator({ data, scrollX, style }: PaginatorProps) {
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, style]}>
      {data.map((_: any, i: number) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 30, 10],
          extrapolate: 'clamp',
        });
        const dotOpacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp',
        });

        return <Animated.View style={[styles.dot, { width: dotWidth, opacity: dotOpacity }]} key={i} />;
      })}
    </View>
  );
}
