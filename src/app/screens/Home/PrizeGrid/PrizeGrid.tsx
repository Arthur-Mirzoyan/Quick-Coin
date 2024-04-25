import React from 'react';
import { FlatList } from 'react-native';
import { styles } from './PrizeGrid.style';
import { FontAwesome5, Entypo, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Button } from '@components/Button/Button';
import { BlurView } from 'expo-blur';
import { variables } from '@styles/base/variables';

export function PrizeGrid({ navigation }: { navigation: any }) {
  const iconSize = 60;
  const iconColor = variables.colors.secondary;

  const items = [
    {
      icon: <FontAwesome5 name="chess-knight" size={iconSize} color={iconColor} />,
      title: 'Games',
      category: 'games',
    },
    {
      icon: <Ionicons name="ticket-sharp" size={iconSize} color={iconColor} />,
      title: 'Tickets',
      category: 'tickets',
    },
    {
      icon: <Entypo name="book" size={iconSize} color={iconColor} />,
      title: 'Books',
      category: 'books',
    },
    {
      icon: <MaterialCommunityIcons name="ticket-percent" size={iconSize} color={iconColor} />,
      title: 'Coupon',
      category: 'coupon',
    },
  ];

  return (
    <FlatList
      data={items}
      numColumns={2}
      contentContainerStyle={{ gap: 10 }}
      renderItem={({ item }) => (
        <BlurView intensity={55} tint="light" style={styles.card}>
          <Button
            title={item.title}
            onPress={() => navigation.push('list', { category: item.category })}
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
