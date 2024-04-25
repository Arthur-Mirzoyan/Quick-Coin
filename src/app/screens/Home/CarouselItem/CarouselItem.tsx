import React from 'react';
import { View, Image, ImageSourcePropType } from 'react-native';
import { styles } from './CarouselItem.style';

export function CarouselItem({ img }: { img: ImageSourcePropType }) {
  return (
    <View style={styles.container}>
      <Image source={img} style={styles.img} />
    </View>
  );
}
