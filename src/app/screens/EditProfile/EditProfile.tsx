import React from 'react';
import { ScrollView } from 'react-native';
import { styles } from './EditProfile.style';
import { useUser } from '@providers/user.provider';

function EditProfileScreen() {
  const { userInfo } = useUser();

  return <ScrollView style={styles.container}></ScrollView>;
}

export default EditProfileScreen;
