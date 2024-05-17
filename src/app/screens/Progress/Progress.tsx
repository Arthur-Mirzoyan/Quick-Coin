import React from 'react';
import { ScrollView } from 'react-native';
import { styles } from './Progress.style';
import { SubjectProgressCard } from '@components/SubjectProgressCard/SubjectProgressCard';

function ProgressScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SubjectProgressCard title="Անգլերեն" coinsGained={0} totalCoins={100} />
      <SubjectProgressCard title="Պատմություն" coinsGained={32} totalCoins={100} />
      <SubjectProgressCard title="Մաթեմատիկա" coinsGained={100} totalCoins={100} />
      <SubjectProgressCard title="Հայոց լեզու" coinsGained={90} totalCoins={100} />
    </ScrollView>
  );
}

export default ProgressScreen;
