import React, { useState } from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import { styles } from './SignIn.styles';
import { Button } from '@components/Button/Button';
import { InputBox } from '@components/InputBox/InputBox';
import { Ionicons, Entypo } from '@expo/vector-icons';
import { useUser } from '@providers/user.provider';
import RegistrationService from '@services/registration';
import { Helper } from '@utils/helper';
import { KeyboardEnum } from '@enums/Keyboard.enum';
import LocalStorageService from '@services/localStorage';
import { Local } from '@constants/local';

const iconColor = '#A2A2A7';
const iconSize = 24;

function SignInScreen({ navigation }: any) {
  const { setUser } = useUser();
  const [data, setData] = useState({ email: '', password: '' });

  const signin = (): void => {
    const { email, password } = data;
    if (!Helper.isEmpty(email, password)) {
      RegistrationService.getUserData(email, password)
        .then(async (user) => {
          if (user.id) {
            setUser(user);
            await LocalStorageService.setItem(Local.user, user);
            navigation.navigate('main');
          }
        })
        .catch((err) => console.log(JSON.stringify(err, null, 4)));
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Pressable style={styles.back_btn} onPress={navigation.goBack}>
        <Entypo name="chevron-left" size={25} color="white" />
      </Pressable>
      <View style={styles.main}>
        <Text style={styles.main_title}>Sign In</Text>
        <View style={styles.inputs_view}>
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
            title="Sign In"
            onPress={signin}
            buttonStyle={styles.signin_button}
            textStyle={styles.signin_button_text}
          />
          <Pressable style={styles.signup_button} onPress={() => navigation.navigate('signup')}>
            <Text style={styles.signup_button_text}>Don't have an account?</Text>
            <Text style={[styles.signup_button_text, styles.signup_button_text_signup]}>Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

export default SignInScreen;
