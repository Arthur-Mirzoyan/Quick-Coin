import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { styles } from './ChangePassword.style';
import { Ionicons } from '@expo/vector-icons';
import { InputBox } from '@components/InputBox/InputBox';
import { Button } from '@components/Button/Button';

const iconColor = '#A2A2A7';
const iconSize = 24;

function ChangePasswordScreen({ navigation }: any) {
  const [userData, setUserData] = useState({
    current: '',
    new: '',
    confirm: '',
  });

  const updatePassword = async (): Promise<void> => {
    // Check also the current password
    if (userData.new === userData.confirm) {
      // await updateUser(userData);

      navigation.goBack();
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.info_view}>
        <InputBox
          title="Current Password"
          icon={{ left: <Ionicons name="lock-closed-outline" size={iconSize} color={iconColor} /> }}
          isPassword
          visibilityIcon
          visibilityIconColor={iconColor}
          getInputValue={(val) => setUserData({ ...userData, current: val })}
        />
        <InputBox
          title="New Password"
          icon={{ left: <Ionicons name="lock-closed-outline" size={iconSize} color={iconColor} /> }}
          isPassword
          visibilityIcon
          visibilityIconColor={iconColor}
          getInputValue={(val) => setUserData({ ...userData, new: val })}
        />
        <InputBox
          title="Confirm New Password"
          icon={{ left: <Ionicons name="lock-closed-outline" size={iconSize} color={iconColor} /> }}
          isPassword
          visibilityIcon
          visibilityIconColor={iconColor}
          getInputValue={(val) => setUserData({ ...userData, confirm: val })}
        />
      </View>
      <Button
        title="Change"
        onPress={updatePassword}
        buttonStyle={styles.save_button}
        textStyle={styles.save_button_text}
      />
    </ScrollView>
  );
}

export default ChangePasswordScreen;
