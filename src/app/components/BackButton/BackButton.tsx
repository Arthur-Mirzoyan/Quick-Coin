import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { variables } from '@styles/base/variables';

export default function BackButton() {
  const navigation = useNavigation();

  return (
    <Ionicons
      name="chevron-back-outline"
      size={26}
      color={variables.colors.primary}
      onPress={() => navigation.goBack()}
      style={{ padding: 10, paddingLeft: 0 }}
    />
  );
}
