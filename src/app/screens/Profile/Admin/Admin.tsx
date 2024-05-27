import React from 'react';
import { ScrollView } from 'react-native';
import { styles } from './Admin.style';
import { Button } from '@components/Button/Button';

function AdminScreen({ navigation }: any) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Button
        title="Ավելացնել նոր թեստ"
        onPress={() => navigation.push('quiz')}
        buttonStyle={styles.button}
        textStyle={styles.text}
      />
      <Button
        title="Ավելցանել նոր մրցանակ"
        onPress={() => navigation.push('gift')}
        buttonStyle={styles.button}
        textStyle={styles.text}
      />
    </ScrollView>
  );
}

export default AdminScreen;
