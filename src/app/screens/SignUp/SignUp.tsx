import React, { useState } from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import { styles } from './SignUp.styles';
import { Button } from '@components/Button/Button';
import { InputBox } from '@components/InputBox/InputBox';
import { Ionicons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import { KeyboardEnum } from '@enums/Keyboard.enum';
import RegistrationService from '@services/registration';
import { Helper } from '@utils/helper';

const iconColor = '#A2A2A7';
const iconSize = 24;

function SignUpScreen({ navigation }: any) {
  const [data, setData] = useState({ email: '', password: '', fullName: '' });

  const signup = (): void => {
    const { email, password, fullName } = data;
    if (Helper.isEmpty(email, password, fullName)) {
      RegistrationService.sendUserCreationRequest(email, password, fullName)
        .then((res) => {
          console.log(JSON.stringify(res, null, 4));
        })
        .catch((err) => console.log(err.message));
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Pressable style={styles.back_btn} onPress={navigation.goBack}>
        <Entypo name="chevron-left" size={25} color="white" />
      </Pressable>
      <View style={styles.main}>
        <Text style={styles.main_title}>Sign Up</Text>
        <View style={styles.inputs_view}>
          <InputBox
            title="Full Name"
            icon={{ left: <MaterialCommunityIcons name="account-outline" size={iconSize} color={iconColor} /> }}
            getInputValue={(val) => setData({ ...data, fullName: val })}
          />
          <InputBox
            title="Email Address"
            icon={{ left: <Ionicons name="mail-outline" size={iconSize} color={iconColor} /> }}
            keyboard={KeyboardEnum.Email}
            getInputValue={(val) => setData({ ...data, email: val })}
          />
          <InputBox
            title="Password"
            icon={{ left: <Ionicons name="lock-closed-outline" size={iconSize} color={iconColor} /> }}
            isPassword
            visibilityIcon
            visibilityIconColor={iconColor}
            getInputValue={(val) => setData({ ...data, password: val })}
          />
        </View>
        <View style={styles.footer}>
          <Button
            title="Sign Up"
            onPress={signup}
            buttonStyle={styles.signup_button}
            textStyle={styles.signup_button_text}
          />
          <Pressable style={styles.signin_button} onPress={navigation.goBack}>
            <Text style={styles.signin_button_text}>Already have an account?</Text>
            <Text style={[styles.signin_button_text, styles.signup_button_text_signup]}>Sign In</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

export default SignUpScreen;
