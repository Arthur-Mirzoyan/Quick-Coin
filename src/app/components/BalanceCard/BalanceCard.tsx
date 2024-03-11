import React from 'react';
import { View, Image, Text } from 'react-native';
import { styles } from './BalanceCard.style';

import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { BalanceCardModel } from '@models/BalanceCard.model';

export function BalanceCard(card: BalanceCardModel) {
  const cardCode = card.code.split(' ');

  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.ball1}
        colors={['#143A32', '#249880', '#D2DFDD']}
        start={[0.1, 0.3]}
        end={[0.7, 0.9]}
      />
      <View style={styles.card_box}>
        <BlurView intensity={50} tint="light" style={styles.card}>
          <Image source={require('@assets/img/logo.png')} style={styles.logo} />
          <View style={styles.card_main}>
            <View style={styles.card_code_box}>
              <Text style={styles.card_code}>{cardCode[0]}</Text>
              <Text style={styles.card_code}>{cardCode[1]}</Text>
              <Text style={styles.card_code}>{cardCode[2]}</Text>
              <Text style={styles.card_code}>{cardCode[3]}</Text>
            </View>
            <View style={styles.balance_box}>
              <Text style={styles.small_text}>Your balance</Text>
              <Text style={styles.small_text}>{card.balance} coins</Text>
            </View>
          </View>
          <View style={styles.card_footer}>
            <View style={[styles.vertical_box, { flex: 0.25 }]}>
              <Text style={styles.small_text}>Expr. Date</Text>
              <Text style={styles.small_text}>
                {card.expMonth}/{card.expYear}
              </Text>
            </View>
            <View style={[styles.vertical_box, { flex: 0.25 }]}>
              <Text>CVV</Text>
              <Text>{card.cvv}</Text>
            </View>
            <View style={[styles.vertical_box, styles.card_footer_ysci]}>
              <Text>YSCI</Text>
            </View>
          </View>
        </BlurView>
      </View>
      <LinearGradient
        style={styles.ball2}
        colors={['#143A32', '#249880', '#D2DFDD']}
        start={[0.2, 0.4]}
        end={[0.8, 1]}
      />
    </View>
  );
}
