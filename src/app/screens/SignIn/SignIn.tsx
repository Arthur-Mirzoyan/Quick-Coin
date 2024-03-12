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
import { useUser } from '@providers/user.provider';

function SignInScreen({ navigation }: any) {
  const { setUserInfo } = useUser();
  const [user, setUser] = useState<UserInfoModel>({
    email: '',
    password: '',
  });
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  const goBack = (): void => {
    navigation.goBack();
  };

  const goToSignUp = (): void => {
    navigation.navigate('signup');
  };

  const signin = (): void => {
    navigation.navigate('main');
    console.log(user);

    // Remove
    setUserInfo({
      fullName: 'Bob Bobikyan',
      email: 'bob.bobikyan@gmail.com',
      password: 'pa$$word',
      phone: '+123456789',
      photoUrl: 'https://shorturl.at/hnIQZ',
    });
    //
  };

  const handleShowVisibility = (): void => setPasswordVisible((prev) => !prev);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Pressable style={styles.back_btn} onPress={goBack}>
        <Entypo name="chevron-left" size={25} color="white" />
      </Pressable>
      <View style={styles.main}>
        <Text style={styles.main_title}>Sign In</Text>
        <View style={styles.inputs_view}>
          <InputBox title="Email Address" iconPosition="left" getInputValue={(val) => setUser({ ...user, email: val })}>
            <Ionicons name="mail-outline" size={24} color="#A2A2A7" />
          </InputBox>
          <InputBox
            title="Password"
            iconPosition="inline"
            isPassword={!passwordVisible}
            getInputValue={(val) => setUser({ ...user, password: val })}
          >
            <Ionicons name="lock-closed-outline" size={24} color="#A2A2A7" />
            <AntDesign name="eyeo" size={24} color="#A2A2A7" onPress={handleShowVisibility} />
          </InputBox>
        </View>
        <View style={styles.footer}>
          <Button
            title="Sign In"
            onPress={signin}
            buttonStyle={styles.signin_button}
            textStyle={styles.signin_button_text}
          />
          <Pressable style={styles.signup_button} onPress={goToSignUp}>
            <Text style={styles.signup_button_text}>Don't have an account?</Text>
            <Text style={[styles.signup_button_text, styles.signup_button_text_signup]}>Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

export default SignInScreen;
