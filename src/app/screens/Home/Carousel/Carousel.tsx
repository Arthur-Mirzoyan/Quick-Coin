import React, { useEffect, useRef, useState } from "react";
import {
  FlatList,
  Image,
  View,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent, TouchableOpacity,
} from 'react-native';
import { variables } from '@styles/base/variables';

const CARD_WIDTH = 300;
const CARD_WIDTH_SPACING = CARD_WIDTH + 20;

interface CarouselItem {
  id: string;
  image: any;
}

const Carousel = () => {
  const flatlistRef = useRef<FlatList>(null);
  const screenWidth = Dimensions.get("window").width;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const getItemLayout = (
    _: any,
    index: number
  ): { length: number; offset: number; index: number } => ({
    length: screenWidth,
    offset: screenWidth * index,
    index,
  });

  const carouselData: CarouselItem[] = [
    { id: "01", image: require("../../../../../assets/img/onboarding1.png") },
    { id: "02", image: require("../../../../../assets/img/onboarding2.png") },
    { id: "03", image: require("../../../../../assets/img/onboarding3.png") },
  ];

  const calculateScale = (index: number): number => {
    const offset = Math.abs(index - activeIndex) * screenWidth;
    return Math.max(1 - offset / screenWidth, 0.5);
  };

  const renderItem = ({ item, index }: { item: CarouselItem; index: number }) => {
    const scale = calculateScale(index);
    return (
      <TouchableOpacity
        style={{
          marginLeft: variables.margins.l,
          marginRight: index === carouselData.length - 1 ? variables.margins.l : 0,
        }}>
      <View>
        <Image
          source={item.image}
          style={{ height: 200, width: screenWidth * scale }}
          resizeMode="contain"
        />
      </View>
    </TouchableOpacity>
    );
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / screenWidth);
    setActiveIndex(index);
  };

  const renderDotIndicators = () =>
    carouselData.map((_, index) => (
      <View
        key={index}
        style={{
          backgroundColor: activeIndex === index ? variables.colors.tertiary : variables.colors.primary,
          height: 10,
          width: 10,
          borderRadius: variables.borderRadius.xs,
          marginHorizontal: variables.margins.s,
        }}
      />
    ));

  return (
    <View>
      <FlatList
        data={carouselData}
        horizontal
        snapToInterval={CARD_WIDTH_SPACING}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        ref={flatlistRef}
        getItemLayout={getItemLayout}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        pagingEnabled
        onScroll={handleScroll}
      />
      <View style={{ flexDirection: "row", justifyContent: "center", marginTop: variables.margins.l }}>
        {renderDotIndicators()}
      </View>
    </View>
  );
};

export default Carousel;

