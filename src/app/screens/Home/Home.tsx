import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { styles } from './Home.style';
// Models
import { UserInfoModel } from '@models/UserInfo.model';
// Custom
import { UserCard } from '@components/UserCard/UserCard';
import Carousel from '@screens/Home/Carousel/Carousel';
import { LinearGradient } from '@node_modules/expo-linear-gradient';
import GridItem from '@screens/Home/GridItem/GridItem';

function HomeScreen() {

  const sampleUserInfo: UserInfoModel = {
    fullName: 'Bob Bobikyan',
    email: 'bob.bobikyan@gmail.com',
    password: 'pa$$word',
    phone: '+123456789',
    photoUrl: 'https://shorturl.at/hnIQZ',
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <UserCard user={sampleUserInfo} onPress={() => {}} />
      <SafeAreaView style={styles.container}>
        <Carousel />
      </SafeAreaView>
      <GridItem></GridItem>
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
    </ScrollView>

  );
}

export default HomeScreen;
