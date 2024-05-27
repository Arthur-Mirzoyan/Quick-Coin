import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from './Slider.style';

type SliderProps = {
  current: number;
  total: number;
  startPoint?: number;
};

export function Slider({ current, total, startPoint }: SliderProps) {
  const [passed, setPassed] = useState(0);

  useEffect(() => {
    setPassed(Math.floor((current / total) * 100));
  }, [current, total]);

  return (
    <View style={styles.container}>
      <View style={styles.slider}>
        <View>
          <View style={[styles.slider_filled, { width: `${passed}%` }]}>
            <View style={styles.slider_trigger}></View>
          </View>
        </View>
      </View>
      <View style={styles.data_box}>
        <Text style={styles.small_text}>{startPoint ?? current}</Text>
        <Text style={styles.small_text}>{total}</Text>
      </View>
    </View>
  );
}
