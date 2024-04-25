import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { styles } from './EditProfile.style';
import { useUser } from '@providers/user.provider';
import { UserModel } from '@models/user.model';
import { KeyboardEnum } from '@enums/Keyboard.enum';
import { Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { InputBox } from '@components/InputBox/InputBox';
import { Button } from '@components/Button/Button';

function EditProfileScreen({ navigation }: any) {
  const { user, setUser } = useUser();
  const [userData, setUserData] = useState<Partial<UserModel>>({
    email: user.email,
    fullName: user.fullName,
    phone: user.phone,
  });

  const updateUserData = async (): Promise<void> => {
    // await updateUser(userData);
    let newInfo: UserModel = { ...user, ...userData };
    setUser(newInfo);
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.info_view}>
        <InputBox
          title="Full Name"
          iconPosition="left"
          defaultValue={user.fullName}
          getInputValue={(val) => setUserData({ ...userData, fullName: val })}
        >
          <MaterialCommunityIcons name="account-outline" size={24} color="#A2A2A7" />
        </InputBox>
        <InputBox
          title="Phone Number"
          iconPosition="left"
          keyboard={KeyboardEnum.Phone}
          defaultValue={user.phone}
          getInputValue={(val) => setUserData({ ...userData, phone: val })}
        >
          <Feather name="phone" size={24} color="#A2A2A7" />
        </InputBox>
        <InputBox
          title="Email Address"
          iconPosition="left"
          keyboard={KeyboardEnum.Email}
          defaultValue={user.email}
          getInputValue={(val) => setUserData({ ...userData, email: val })}
        >
          <Ionicons name="mail-outline" size={24} color="#A2A2A7" />
        </InputBox>
      </View>
      <Button
        title="Save"
        onPress={updateUserData}
        buttonStyle={styles.save_button}
        textStyle={styles.save_button_text}
      />
    </ScrollView>
  );
}

export default EditProfileScreen;
