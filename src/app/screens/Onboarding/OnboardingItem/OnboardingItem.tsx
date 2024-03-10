import React from 'react';
import { View, Image, Text } from 'react-native';
import { styles } from './OnboardingItem.style';
import { OnboardingItemType } from '../items';

function OnboardingItem(item: OnboardingItemType) {
  return (
    <View style={styles.container}>
      <Image source={item.img} style={styles.img} />
      <View style={styles.body}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
}

export default OnboardingItem;
