import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { styles } from './EditProfile.style';
import { useUser } from '@providers/user.provider';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { InputBox } from '@components/InputBox/InputBox';
import { Button } from '@components/Button/Button';

function EditProfileScreen({ navigation }: any) {
  const { user, setUser } = useUser();
  const [data, setData] = useState({ password: '', fullName: user.fullName });

  const updateUserData = async (): Promise<void> => {
    // check password then update
    // setUser({ ...user, fullName: data.fullName });
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.info_view}>
        <InputBox
          title="Full Name"
          icon={{ left: <MaterialCommunityIcons name="account-outline" size={24} color="#A2A2A7" /> }}
          defaultValue={data.fullName}
          getInputValue={(val) => setData({ ...data, fullName: val })}
        />
        <InputBox
          title="Password"
          icon={{ left: <MaterialCommunityIcons name="account-outline" size={24} color="#A2A2A7" /> }}
          isPassword
          visibilityIcon
          visibilityIconColor="#A2A2A7"
          getInputValue={(val) => setData({ ...data, password: val })}
        />
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
