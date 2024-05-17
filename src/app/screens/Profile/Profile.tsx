import React, { useState } from 'react';
import { ScrollView, View, Pressable } from 'react-native';
import { styles } from './Profile.style';
import { MaterialIcons, Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { useUser } from '@providers/user.provider';
import { BalanceCardModel } from '@models/BalanceCard.model';
import { UserCard } from '@components/UserCard/UserCard';
import { BalanceCard } from '@components/BalanceCard/BalanceCard';
import { InputBox } from '@components/InputBox/InputBox';
import { Popup } from '@components/Popup/Popup';
import { Button } from '@components/Button/Button';

function ProfileScreen({ navigation }: any) {
  const { userInfo } = useUser();

  const sampleCard: BalanceCardModel = {
    balance: 2000,
    code: '4562 1122 4595 7852',
    cvv: 6968,
    expMonth: 12,
    expYear: 24,
  };

  const [modalVisible, setModalVisible] = useState<boolean>(false);

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <UserCard style={styles.user_card} />
          <Pressable style={styles.edit_button} onPress={() => setModalVisible(true)}>
            <MaterialIcons name="edit" size={30} color="white" />
          </Pressable>
        </View>
        <BalanceCard {...sampleCard} />
        <View style={styles.info_view}>
          <InputBox title="Անուն Ազգանուն" iconPosition="left" value={userInfo.fullName} readonly={true}>
            <MaterialCommunityIcons name="account-outline" size={24} color="#A2A2A7" />
          </InputBox>
          <InputBox title="Հեռախոսահամար" iconPosition="left" value={userInfo.phone} readonly={true}>
            <Feather name="phone" size={24} color="#A2A2A7" />
          </InputBox>
          <InputBox title="Էլեկտրոնային հասցե" iconPosition="left" value={userInfo.email} readonly={true}>
            <Ionicons name="mail-outline" size={24} color="#A2A2A7" />
          </InputBox>
        </View>
      </ScrollView>
      <Popup modalVisibility={modalVisible} setModalVisibility={setModalVisible}>
        <View style={styles.modal_view}>
          <Button
            title="Փոխել գլխավոր նկարը"
            onPress={() => {}}
            buttonStyle={styles.edit_option_button}
            textStyle={styles.edit_button_button_text}
          />
          <Button
            title="Փոխել անձնական տվյալ"
            onPress={() => navigation.push('edit')}
            buttonStyle={styles.edit_option_button}
            textStyle={styles.edit_button_button_text}
          />
          <Button
            title="Փոխել գաղտնաբառը"
            onPress={() => navigation.push('changePassword')}
            buttonStyle={styles.edit_option_button}
            textStyle={styles.edit_button_button_text}
          />
        </View>
      </Popup>
    </>
  );
}

export default ProfileScreen;
