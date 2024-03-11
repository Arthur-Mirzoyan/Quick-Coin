import React from 'react';
import { ScrollView, View } from 'react-native';
import { styles } from './MyBalance.style';
// Models
import { BalanceCardModel } from '@models/BalanceCard.model';
import { UserInfoModel } from '@models/UserInfo.model';
// Custom
import { BalanceCard } from '@components/BalanceCard/BalanceCard';
import { UserCard } from '@components/UserCard/UserCard';
import { SubjectProgressCard } from '@components/SubjectProgressCard/SubjectProgressCard';

function MyBalanceScreen() {
  const sampleCard: BalanceCardModel = {
    balance: 2000,
    code: '4562 1122 4595 7852',
    cvv: 6968,
    expMonth: 12,
    expYear: 24,
  };

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
      <BalanceCard {...sampleCard} />
      <View style={{gap: 40}}>
        <SubjectProgressCard title="English" coinsGained={0} totalCoins={100} />
        <SubjectProgressCard title="History" coinsGained={32} totalCoins={100} />
        <SubjectProgressCard title="Maths" coinsGained={100} totalCoins={100} />
        <SubjectProgressCard title="Armenian" coinsGained={90} totalCoins={100} />
      </View>
    </ScrollView>
  );
}

export default MyBalanceScreen;
