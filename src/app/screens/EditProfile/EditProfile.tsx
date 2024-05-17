import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { styles } from './EditProfile.style';
import { useUser } from '@providers/user.provider';
import { UserInfoModel } from '@models/UserInfo.model';
import { KeyboardEnum } from '@enums/Keyboard.enum';
import { Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { InputBox } from '@components/InputBox/InputBox';
import { Button } from '@components/Button/Button';

function EditProfileScreen({ navigation }: any) {
  const { userInfo, setUserInfo } = useUser();

  const [userData, setUserData] = useState<Partial<UserInfoModel>>({
    email: userInfo.email,
    fullName: userInfo.fullName,
    phone: userInfo.phone,
  });

  const updateUserData = async (): Promise<void> => {
    // await updateUser(userData);
    let newInfo: UserInfoModel = { ...userInfo, ...userData };
    setUserInfo(newInfo);
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.info_view}>
        <InputBox
          title="Անուն Ազգանուն"
          iconPosition="left"
          defaultValue={userInfo.fullName}
          getInputValue={(val) => setUserData({ ...userData, fullName: val })}
        >
          <MaterialCommunityIcons name="account-outline" size={24} color="#A2A2A7" />
        </InputBox>
        <InputBox
          title="Հեռախոսահամար"
          iconPosition="left"
          keyboard={KeyboardEnum.Phone}
          defaultValue={userInfo.phone}
          getInputValue={(val) => setUserData({ ...userData, phone: val })}
        >
          <Feather name="phone" size={24} color="#A2A2A7" />
        </InputBox>
        <InputBox
          title="Էլեկտրոնային հասցե"
          iconPosition="left"
          keyboard={KeyboardEnum.Email}
          defaultValue={userInfo.email}
          getInputValue={(val) => setUserData({ ...userData, email: val })}
        >
          <Ionicons name="mail-outline" size={24} color="#A2A2A7" />
        </InputBox>
      </View>
      <Button
        title="Պահպանել"
        onPress={updateUserData}
        buttonStyle={styles.save_button}
        textStyle={styles.save_button_text}
      />
    </ScrollView>
  );
}

export default EditProfileScreen;
