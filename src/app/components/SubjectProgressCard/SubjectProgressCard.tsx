import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './SubjectProgressCard.style';

type SubjectProgressCardProps = {
  title: string;
  coinsGained: number;
  totalCoins: number;
};

export function SubjectProgressCard({ title, coinsGained, totalCoins }: SubjectProgressCardProps) {
  const passed = Math.floor((coinsGained / totalCoins) * 100);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.slider}>
        <View>
          <View style={[styles.slider_filled, { width: `${passed}%` }]}>
            <View style={styles.slider_trigger}></View>
          </View>
        </View>
      </View>
      <View style={styles.data_box}>
        <Text style={styles.small_text}>0</Text>
        <Text style={styles.small_text}>{totalCoins}</Text>
      </View>
    </View>
  );
}
