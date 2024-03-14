import { StyleSheet, Dimensions } from 'react-native';
import { variables } from '@src/styles/base/variables';

const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    flex: 1,
    alignItems: 'center',
    padding: variables.paddings.xl,
  },
  img: {
    width: '100%',
    flex: 0.7,
    resizeMode: 'contain',
    alignItems:'center',
  },
  body: {
    flex: 0.3,
    display: 'flex',
    gap: variables.spacings.l,
    width: '100%',
    maxWidth: 330,
    justifyContent: 'flex-start',
  },
  title: {
    fontWeight: '800',
    fontSize: variables.fontSizes.xxl,
    color: variables.colors.secondary,
    textAlign: 'center',
    flexWrap: 'wrap',
  },
  description: {
    fontSize: variables.fontSizes.s,
    fontWeight: '400',
    color: variables.colors.textGray,
    textAlign: 'center',
    flexWrap: 'wrap',
  },
});
