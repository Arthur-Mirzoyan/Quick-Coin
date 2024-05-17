import React, { RefObject, useState } from 'react';
import { View, FlatList, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import { styles } from './Onboarding.style';
import { items } from './items';
import { CarouselItem } from './CarouselItem/CarouselItem';
import { Button } from '@components/Button/Button';
import { Carousel } from '@components/Carousel/Carousel';

function OnboardingScreen({ navigation }: any) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flatListRef, setFlatListRef] = useState<RefObject<FlatList>>();

  const showNextItem = (): void => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < items.length) {
      setCurrentIndex(nextIndex);
      flatListRef?.current?.scrollToIndex({ animated: true, index: nextIndex });
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
        <Carousel
          items={items}
          getRef={(ref) => setFlatListRef(ref)}
          renderItem={({ item }) => <CarouselItem {...item} />}
          horizontal={true}
          onScrollEnd={handleScrollEnd}
          paginatorShown={true}
          paginatorStyle={styles.paginator}
        />
      </View>
      <View style={styles.footer}>
        <Button title="Առաջ" onPress={showNextItem} buttonStyle={styles.button} textStyle={styles.button_text} />
      </View>
    </View>
  );
}

export default OnboardingScreen;
