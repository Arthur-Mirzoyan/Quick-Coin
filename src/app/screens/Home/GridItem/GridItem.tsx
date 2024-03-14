import React from 'react';
import { View, FlatList, TouchableOpacity, Image, Text } from 'react-native'; // Import Image and Text
import { styles } from './GridItem.style'; // Import styles if it's defined
import { BlurView } from 'expo-blur';

interface GridItem {
  key: string;
  icon: any;
  text: string;
}

const data: GridItem[] = [
  { key: '1', icon: require('../../../../../assets/img/chess.png'), text: 'Games' },
  { key: '2', icon: require('../../../../../assets/img/ticket.png'), text: 'Tickets' },
  { key: '3', icon: require('../../../../../assets/img/book.png'), text: 'Books' },
  { key: '4', icon: require('../../../../../assets/img/coupon.png'), text: 'Coupon' },
];

const GridItem: React.FC = () => {
  const renderItem = ({ item }: { item: GridItem }) => (
    <BlurView intensity={15} tint="light" style={styles.card}>
      <TouchableOpacity>
        <View>
          <Image source={item.icon} style={styles.icon} />
          <Text style={styles.text}>{item.text}</Text>
        </View>

      </TouchableOpacity>
    </BlurView>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
};

export default GridItem;
