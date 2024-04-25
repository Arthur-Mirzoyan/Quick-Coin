import React from 'react';
import { View, SectionList } from 'react-native';
import { styles } from './Home.style';
import { UserCard } from '@components/UserCard/UserCard';
import { Carousel } from '@components/Carousel/Carousel';
import { CarouselItem } from './CarouselItem/CarouselItem';
import { LinearGradient } from 'expo-linear-gradient';
import { PrizeGrid } from '@screens/Home/PrizeGrid/PrizeGrid';

function HomeScreen() {
  const carouselItems = [
    require('@assets/img/onboarding1.png'),
    require('@assets/img/onboarding2.png'),
    require('@assets/img/onboarding3.png'),
  ];

  const sections = [
    { title: 'UserCard', data: [<UserCard />] },
    {
      title: 'Carousel',
      data: [
        <Carousel
          items={carouselItems}
          renderItem={({ item }) => <CarouselItem img={item} />}
          horizontal={true}
          paginatorShown={true}
          autoScroll={true}
          autoScrollRate={2000}
          gapBetweenHorizontalItems={20}
        />,
      ],
    },
    { title: 'PrizeGrid', data: [<PrizeGrid />] },
  ];

  return (
    <View>
      <SectionList contentContainerStyle={styles.container} sections={sections} renderItem={({ item }) => item} />
      <LinearGradient
        style={styles.ball1}
        colors={['#143A32', '#249880', '#D2DFDD']}
        start={[0.1, 0.3]}
        end={[0.7, 0.9]}
      />
      <LinearGradient
        style={styles.ball2}
        colors={['#143A32', '#249880', '#D2DFDD']}
        start={[0.2, 0.4]}
        end={[0.8, 1]}
      />
      <LinearGradient
        style={styles.ball3}
        colors={['#143A32', '#249880', '#D2DFDD']}
        start={[0.1, 0.3]}
        end={[0.7, 0.9]}
      />
      <LinearGradient
        style={styles.ball4}
        colors={['#143A32', '#249880', '#D2DFDD']}
        start={[0.1, 0.3]}
        end={[0.7, 0.9]}
      />
    </View>
  );
}

export default HomeScreen;
