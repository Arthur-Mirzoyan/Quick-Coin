import React from 'react';
import { ScrollView } from 'react-native';
import { styles } from './Progress.style';
import { SubjectProgressCard } from '@components/SubjectProgressCard/SubjectProgressCard';

function ProgressScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SubjectProgressCard title="English" coinsGained={0} totalCoins={100} />
      <SubjectProgressCard title="History" coinsGained={32} totalCoins={100} />
      <SubjectProgressCard title="Maths" coinsGained={100} totalCoins={100} />
      <SubjectProgressCard title="Armenian" coinsGained={90} totalCoins={100} />
    </ScrollView>
  );
}

export default ProgressScreen;
