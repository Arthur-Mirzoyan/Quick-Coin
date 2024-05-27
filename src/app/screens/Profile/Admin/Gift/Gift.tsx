import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from './Gift.style';
import { variables } from '@styles/base/variables';
import { GiftService } from '@services/gift';
import { Button } from '@components/Button/Button';
import { InputBox } from '@components/InputBox/InputBox';
import { GiftEnum } from '@enums/Gift.enum';
import { KeyboardEnum } from '@enums/Keyboard.enum';
import { Helper } from '@utils/helper';

const radioButtonColor = variables.colors.secondary;
const iconColor = variables.colors.secondary;
const iconSize = 24;

function GiftScreen() {
  const [data, setData] = useState({ name: '', pricePoints: 100, category: '' });
  const [selectedId, setSelectedId] = useState('');

  const categoryGroup = [
    { id: '0', label: 'Խաղեր', value: GiftEnum.Game, color: radioButtonColor },
    { id: '1', label: 'Տոմսեր', value: GiftEnum.Ticket, color: radioButtonColor },
    { id: '2', label: 'Գրքեր', value: GiftEnum.Book, color: radioButtonColor },
    { id: '3', label: 'Կուպոններ', value: GiftEnum.Coupon, color: radioButtonColor },
  ];

  const onCategorySelect = (id: string): void => {
    let category = categoryGroup[+id].value;
    setSelectedId(id);
    setData({ ...data, category });
  };

  const addGift = (): void => {
    const { name, pricePoints, category } = data;
    if (!Helper.isEmpty(name, category) && pricePoints > 0) {
      GiftService.create(name, pricePoints, category)
        .then(() => {
          console.log('Gift added');
        })
        .catch((err) => console.log(JSON.stringify(err, null, 4)));
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <InputBox
        title="Անվանում"
        icon={{ left: <MaterialIcons name="title" size={iconSize} color={iconColor} /> }}
        getInputValue={(val) => setData({ ...data, name: val })}
      />
      <View>
        <Text style={styles.radio_title}>Մրցանակի խումբ</Text>
        <RadioGroup
          radioButtons={categoryGroup}
          onPress={onCategorySelect}
          selectedId={selectedId}
          containerStyle={styles.radio}
          labelStyle={styles.radio_label}
        />
      </View>
      <InputBox
        title="Միավորներ"
        icon={{ left: <MaterialIcons name="attach-money" size={iconSize} color={iconColor} /> }}
        keyboard={KeyboardEnum.Numeric}
        getInputValue={(val) => setData({ ...data, pricePoints: +val })}
      />
      <Button title="Ավելցանել" onPress={addGift} buttonStyle={styles.button} textStyle={styles.text} />
    </ScrollView>
  );
}

export default GiftScreen;
