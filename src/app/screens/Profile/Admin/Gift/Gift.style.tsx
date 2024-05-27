import { StyleSheet } from 'react-native';
import { variables } from '@styles/base/variables';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: variables.paddings.xl,
    gap: variables.spacings.xl,
  },
  radio: {
    alignItems: 'flex-start',
  },
  radio_title: {
    color: variables.colors.primary,
    fontSize: variables.fontSizes.m,
    fontWeight: '400',
    marginBottom: variables.margins.m,
  },
  radio_label: {
    fontSize: variables.fontSizes.l,
    fontWeight: '600',
    color: variables.colors.primary,
  },
  button: {
    backgroundColor: variables.colors.secondary,
    borderRadius: variables.borderRadius.l,
    padding: variables.paddings.m,
  },
  text: {
    color: variables.colors.textLight,
    fontSize: variables.fontSizes.l,
  },
});
