import React, { useState } from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import { styles } from './SignIn.styles';
// Custom
import { Button } from '@components/Button/Button';
import { InputBox } from '@components/InputBox/InputBox';
// Icons
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
// Models
import { UserInfoModel } from '@models/UserInfo.model';

function SignInScreen({ navigation }: any) {
  const [userInfo, setUserInfo] = useState<UserInfoModel>({
    email: '',
    password: '',
  });

  const goBack = (): void => {
    navigation.goBack();
  };

  const signin = (): void => {
    console.log(userInfo);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Pressable style={styles.back_btn} onPress={goBack}>
        <Entypo name="chevron-left" size={25} color="white" />
      </Pressable>
      <View style={styles.main}>
        <Text style={styles.main_title}>Sign In</Text>
        <View style={styles.inputs_view}>
          <InputBox
            title="Email Address"
            iconPosition="left"
            boxStyle={styles.input_box}
            titleStyle={styles.input_title}
            inputBoxStyle={styles.input_box_box}
            inputStyle={styles.input}
            getInputValue={(val) => setUserInfo({ ...userInfo, email: val })}
          >
            <Ionicons name="mail-outline" size={24} color="#A2A2A7" />
          </InputBox>
          <InputBox
            title="Password"
            iconPosition="inline"
            boxStyle={styles.input_box}
            titleStyle={styles.input_title}
            inputBoxStyle={styles.input_box_box}
            inputStyle={styles.input}
            isPassword={true}
            getInputValue={(val) => setUserInfo({ ...userInfo, password: val })}
          >
            <Ionicons name="lock-closed-outline" size={24} color="#A2A2A7" />
            <AntDesign name="eyeo" size={24} color="#A2A2A7" />
          </InputBox>
        </View>
        <View style={styles.footer}>
          <Button
            title="Sign In"
            onPress={signin}
            buttonStyle={styles.signin_button}
            textStyle={styles.signin_button_text}
          />
          <Pressable style={styles.signup_button}>
            <Text style={styles.signup_button_text}>Don't have an account?</Text>
            <Text style={[styles.signup_button_text, styles.signup_button_text_signup]}>Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

export default SignInScreen;
