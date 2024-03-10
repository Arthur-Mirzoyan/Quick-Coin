import React, { useRef, useState } from 'react';
import { View, FlatList, Animated, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import { styles } from './Onboarding.style';
//
import OnboardingItem from './OnboardingItem/OnboardingItem';
import { items } from './items';
// Custom
import { Paginator } from '@components/Paginator/Paginator';
import { Button } from '@components/Button/Button';

function OnboardingScreen({ navigation }: any) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef<FlatList>(null);

  const showNextItem = (): void => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < items.length) {
      setCurrentIndex(nextIndex);
      flatListRef.current?.scrollToIndex({ animated: true, index: nextIndex });
    } else navigation.navigate('signin');
  };

  const handleScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.floor(contentOffsetX / event.nativeEvent.layoutMeasurement.width);
    setCurrentIndex(index);
  };

  return (
    <View style={[styles.container]}>
      <View style={styles.main}>
        <FlatList
          ref={flatListRef}
          data={items}
          renderItem={({ item }) => <OnboardingItem {...item} />}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          bounces={false}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
            useNativeDriver: false,
          })}
          onMomentumScrollEnd={handleScrollEnd}
          scrollEventThrottle={16}
          decelerationRate="normal"
        />
        <Paginator data={items} scrollX={scrollX} style={styles.paginator} />
      </View>
      <View style={styles.footer}>
        <Button title="Next" onPress={showNextItem} buttonStyle={styles.button} textStyle={styles.button_text} />
      </View>
    </View>
  );
}

export default OnboardingScreen;
