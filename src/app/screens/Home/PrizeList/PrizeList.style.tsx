import { StyleSheet } from 'react-native';
import { variables } from '@styles/base/variables';

export const styles = StyleSheet.create({
  container: {
    padding: variables.paddings.l,
    gap: variables.spacings.xl,
  },
  box: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: variables.paddings.l,
    gap: variables.spacings.m,
    backgroundColor: variables.colors.secondary,
    borderRadius: variables.borderRadius.xl,
  },
  name: {
    color: variables.colors.textLight,
    fontWeight: '700',
    fontSize: variables.fontSizes.l,
  },
  cost: {
    color: variables.colors.textLight,
    fontWeight: '700',
    fontSize: variables.fontSizes.m,
  },
  left: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: variables.paddings.s,
  },
  image: {
    borderRadius: 50,
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
});
