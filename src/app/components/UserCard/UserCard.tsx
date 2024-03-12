import { UserInfoModel } from '@models/UserInfo.model';
import React from 'react';
import { View, Text, Image, Pressable, GestureResponderEvent, StyleProp, ViewStyle } from 'react-native';
import { styles } from './UserCard.style';

type UserCardProps = {
  user: UserInfoModel;
  style?: StyleProp<ViewStyle>;
  onPress?: (event: GestureResponderEvent) => void;
};

export function UserCard({ user, style, onPress }: UserCardProps) {
  return (
    <Pressable style={[styles.container, style]} onPress={onPress}>
      <Image
        style={styles.photo}
        source={{ uri: user.photoUrl }}
        defaultSource={require('@assets/img/no-profile.png')}
      />
      <View style={styles.welcoming_box}>
        <Text style={styles.welcoming_text}>Welcome back,</Text>
        <Text style={styles.user_name}>{user.fullName}</Text>
      </View>
    </Pressable>
  );
}
