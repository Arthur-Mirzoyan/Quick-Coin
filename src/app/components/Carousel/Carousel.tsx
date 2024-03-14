import React, { RefObject, useCallback, useEffect, useRef, useState } from 'react';
import {
  FlatList,
  Animated,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleProp,
  ViewStyle,
  ListRenderItem,
} from 'react-native';
// Custom
import { Paginator } from '@components/Paginator/Paginator';
import { useFocusEffect } from '@react-navigation/native';

type CarouselProps<T> = {
  items: T[];
  renderItem: ListRenderItem<T>;
  horizontal?: boolean;
  paginatorShown?: boolean;
  paginatorStyle?: StyleProp<ViewStyle>;
  scrollIndicatorShown?: boolean;
  onScrollEnd?: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
  scrollEventThrottle?: number;
  getRef?: (ref: RefObject<FlatList>) => void;
  autoScroll?: boolean;
  autoScrollRate?: number;
  gapBetweenHorizontalItems?: number;
};

export function Carousel<T>(props: CarouselProps<T>) {
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef<FlatList>(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  useFocusEffect(
    useCallback(() => {
      props.getRef?.(flatListRef);
      if (props.autoScroll) {
        const interval = setInterval(() => {
          setCurrentIndex((prev) => (prev + 1 < props.items.length ? prev + 1 : 0));
        }, props.autoScrollRate ?? 2000);

        return () => clearInterval(interval);
      }
    }, [props.items]),
  );

  useEffect(() => {
    if (props.autoScroll) flatListRef?.current?.scrollToIndex({ animated: true, index: currentIndex });
  }, [currentIndex]);

  return (
    <>
      <FlatList
        ref={flatListRef}
        data={props.items}
        renderItem={props.renderItem}
        horizontal={props.horizontal}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        bounces={false}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
          useNativeDriver: false,
        })}
        onMomentumScrollEnd={props.onScrollEnd}
        scrollEventThrottle={props.scrollEventThrottle ?? 16}
        decelerationRate="normal"
      />
      {props.paginatorShown && props.horizontal && (
        <Paginator
          data={props.items}
          scrollX={scrollX}
          style={props.paginatorStyle}
          gapBetweenHorizontalItems={props.gapBetweenHorizontalItems}
        />
      )}
    </>
  );
}
