import React from 'react';
import { FlatList } from 'react-native';
import { styles } from './GiftGrid.style';
import { FontAwesome5, Entypo, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Button } from '@components/Button/Button';
import { BlurView } from 'expo-blur';
import { variables } from '@styles/base/variables';

export function GiftGrid() {
  const iconSize = 60;
  const iconColor = variables.colors.secondary;

  const items = [
    {
      icon: <FontAwesome5 name="chess-knight" size={iconSize} color={iconColor} />,
      title: 'Games',
    },
    {
      icon: <Ionicons name="ticket-sharp" size={iconSize} color={iconColor} />,
      title: 'Tickets',
    },
    {
      icon: <Entypo name="book" size={iconSize} color={iconColor} />,
      title: 'Books',
    },
    {
      icon: <MaterialCommunityIcons name="ticket-percent" size={iconSize} color={iconColor} />,
      title: 'Coupon',
    },
  ];

  return (
    <FlatList
      data={items}
      numColumns={2}
      renderItem={({ item }) => (
        <BlurView intensity={55} tint="light" style={styles.card}>
          <Button
            title={item.title}
            onPress={() => {}}
            iconVisible={true}
            iconPosition="top"
            buttonStyle={styles.prize}
            textStyle={styles.prize_text}
          >
            {item.icon}
          </Button>
        </BlurView>
      )}
    />
  );
}
