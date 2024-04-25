import { PrizeModel } from '@models/prize.model';
import { Helper } from '@utils/helper';
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { ImageHolder } from '@components/ImageHolder/ImageHolder';
import { styles } from './PrizeList.style';

function PrizeListScreen({ route, navigation }: any) {
  const { category } = route.params;
  const [prizes, setPrizes] = useState<PrizeModel[]>([]);

  useEffect(() => {
    navigation.setOptions({ title: Helper.translateCategory(category) });
    getPrizes();
  }, []);

  const getPrizes = async (): Promise<void> => {
    // get Prizes from server

    // Remove
    let p: PrizeModel[] = [
      {
        name: 'Artasovor',
        category: 'games',
        cost: 5500,
        imgUrl: '',
      },
      {
        name: 'Aylkerp',
        category: 'games',
        cost: 6000,
        imgUrl: '',
      },
      {
        name: 'Mafia',
        category: 'games',
        cost: 5000,
        imgUrl: '',
      },
      {
        name: 'Uno',
        category: 'games',
        cost: 5000,
        imgUrl: '',
      },
    ];
    setPrizes(p);
    //
  };

  return (
    <FlatList
      data={prizes}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => (
        <View style={styles.box}>
          <View style={styles.left}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.cost}>{item.cost} bon</Text>
          </View>
          <View>
            <ImageHolder
              defaultSource={require('@assets/img/no-photo.png')}
              expectedUri={item.imgUrl}
              style={styles.image}
            />
          </View>
        </View>
      )}
    />
  );
}

export default PrizeListScreen;
