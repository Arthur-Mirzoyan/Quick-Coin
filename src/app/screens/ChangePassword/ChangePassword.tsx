import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { styles } from './ChangePassword.style';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { InputBox } from '@components/InputBox/InputBox';
import { Button } from '@components/Button/Button';

function ChangePasswordScreen({ navigation }: any) {
  const [userData, setUserData] = useState({
    current: '',
    new: '',
    confirm: '',
  });

  const [currentPasswordVisibility, setCurrentPasswordVisibility] = useState<boolean>(true);
  const [newPasswordVisibility, setNewPasswordVisibility] = useState<boolean>(true);
  const [confirmPasswordVisibility, setConfirmPasswordVisibility] = useState<boolean>(true);

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
          title="Ներկայիս գաղտնաբառը"
          iconPosition="inline"
          isPassword={currentPasswordVisibility}
          getInputValue={(val) => setUserData({ ...userData, current: val })}
        >
          <Ionicons name="lock-closed-outline" size={24} color="#A2A2A7" />
          <AntDesign
            name="eyeo"
            size={24}
            color="#A2A2A7"
            onPress={() => setCurrentPasswordVisibility((prev) => !prev)}
          />
        </InputBox>
        <InputBox
          title="Նոր գաղտնաբառը"
          iconPosition="inline"
          isPassword={newPasswordVisibility}
          getInputValue={(val) => setUserData({ ...userData, new: val })}
        >
          <Ionicons name="lock-closed-outline" size={24} color="#A2A2A7" />
          <AntDesign name="eyeo" size={24} color="#A2A2A7" onPress={() => setNewPasswordVisibility((prev) => !prev)} />
        </InputBox>
        <InputBox
          title="Հաստատել նոր գաղտնաբառը"
          iconPosition="inline"
          isPassword={confirmPasswordVisibility}
          getInputValue={(val) => setUserData({ ...userData, confirm: val })}
        >
          <Ionicons name="lock-closed-outline" size={24} color="#A2A2A7" />
          <AntDesign
            name="eyeo"
            size={24}
            color="#A2A2A7"
            onPress={() => setConfirmPasswordVisibility((prev) => !prev)}
          />
        </InputBox>
      </View>
      <Button
        title="Փոխել"
        onPress={updatePassword}
        buttonStyle={styles.save_button}
        textStyle={styles.save_button_text}
      />
    </ScrollView>
  );
}

export default ChangePasswordScreen;
