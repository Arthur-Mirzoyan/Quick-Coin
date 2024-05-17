import React, { useState } from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import { styles } from './SignUp.styles';
import { Button } from '@components/Button/Button';
import { InputBox } from '@components/InputBox/InputBox';
import { Ionicons, MaterialCommunityIcons, AntDesign, Entypo, Feather } from '@expo/vector-icons';
import { UserInfoModel } from '@models/UserInfo.model';
import { KeyboardEnum } from '@enums/Keyboard.enum';

function SignUpScreen({ navigation }: any) {
  const [userInfo, setUserInfo] = useState<UserInfoModel>({
    email: '',
    password: '',
    fullName: '',
    phone: '',
  });
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  const goBack = (): void => {
    navigation.goBack();
  };

  const signup = (): void => {
    console.log(userInfo);
  };

  const handleShowVisibility = (): void => setPasswordVisible((prev) => !prev);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Pressable style={styles.back_btn} onPress={goBack}>
        <Entypo name="chevron-left" size={25} color="white" />
      </Pressable>
      <View style={styles.main}>
        <Text style={styles.main_title}>Գրանցվել</Text>
        <View style={styles.inputs_view}>
          <InputBox
            title="Անուն Ազգանուն"
            iconPosition="left"
            getInputValue={(val) => setUserInfo({ ...userInfo, fullName: val })}
          >
            <MaterialCommunityIcons name="account-outline" size={24} color="#A2A2A7" />
          </InputBox>
          <InputBox
            title="Հեռախոսահամար"
            iconPosition="left"
            keyboard={KeyboardEnum.Phone}
            getInputValue={(val) => setUserInfo({ ...userInfo, phone: val })}
          >
            <Feather name="phone" size={24} color="#A2A2A7" />
          </InputBox>
          <InputBox
            title="Էլեկտրոնային հասցե"
            iconPosition="left"
            keyboard={KeyboardEnum.Email}
            getInputValue={(val) => setUserInfo({ ...userInfo, email: val })}
          >
            <Ionicons name="mail-outline" size={24} color="#A2A2A7" />
          </InputBox>
          <InputBox
            title="Գաղտնաբառ"
            iconPosition="inline"
            isPassword={!passwordVisible}
            getInputValue={(val) => setUserInfo({ ...userInfo, password: val })}
          >
            <Ionicons name="lock-closed-outline" size={24} color="#A2A2A7" />
            <AntDesign name="eyeo" size={24} color="#A2A2A7" onPress={handleShowVisibility} />
          </InputBox>
        </View>
        <View style={styles.footer}>
          <Button
            title="Գրանցվել"
            onPress={signup}
            buttonStyle={styles.signup_button}
            textStyle={styles.signup_button_text}
          />
          <Pressable style={styles.signin_button} onPress={goBack}>
            <Text style={styles.signin_button_text}>Արդեն գրանցված ե՞ք։ </Text>
            <Text style={[styles.signin_button_text, styles.signup_button_text_signup]}>Մուտք գործել։</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

export default SignUpScreen;
