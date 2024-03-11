import { variables } from '@styles/base/variables';
import { StyleSheet } from 'react-native';

const ball1Top = -35;
const ball2Bottom = -60;

export const styles = StyleSheet.create({
  container: {
    marginTop: -ball1Top,
    marginBottom: -ball2Bottom,
  },
  card_box: {
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: variables.borderRadius.xl,
    overflow: 'hidden',
    opacity: 0.5,
    width: '100%',
    height: 200,
  },
  card: {
    height: 200,
    padding: variables.paddings.m,
    gap: variables.spacings.m,
    display: 'flex',
  },
  logo: {
    width: 75,
    height: 30,
    resizeMode: 'contain',
  },
  ball1: {
    width: 110,
    height: 110,
    borderRadius: 55,
    position: 'absolute',
    top: ball1Top,
    left: -15,
    zIndex: -1,
    transform: [{ rotate: '-30deg' }],
  },
  ball2: {
    width: 150,
    height: 150,
    borderRadius: 75,
    position: 'absolute',
    bottom: ball2Bottom,
    right: -60,
    zIndex: -1,
  },
  card_code_box: {
    display: 'flex',
    flexDirection: 'row',
    gap: variables.spacings.m,
    justifyContent: 'center',
  },
  card_code: {
    color: variables.colors.secondary,
    fontWeight: '400',
    fontSize: variables.fontSizes.xxxl,
    textAlign: 'center',
  },
  balance_box: {
    display: 'flex',
    flexDirection: 'row',
    gap: variables.spacings.m,
  },
  vertical_box: {
    display: 'flex',
    justifyContent: 'center',
    gap: variables.spacings.xs,
  },
  small_text: {
    color: variables.colors.secondary,
    fontWeight: '400',
    fontSize: variables.fontSizes.s,
  },
  card_main: {
    gap: variables.spacings.xs,
  },
  card_footer: {
    display: 'flex',
    flexDirection: 'row',
    gap: variables.paddings.xl,
  },
  card_footer_ysci: {
    flex: 0.5,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
});
