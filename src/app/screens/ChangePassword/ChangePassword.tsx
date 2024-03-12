import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import { styles } from './ChangePassword.style';
import { useUser } from '@providers/user.provider';

function ChangePasswordScreen() {
  const { userInfo } = useUser();

  return <ScrollView style={styles.container}></ScrollView>;
}

export default ChangePasswordScreen;
