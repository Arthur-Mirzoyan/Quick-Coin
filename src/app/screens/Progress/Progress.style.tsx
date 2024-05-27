import { StyleSheet } from 'react-native';
import { variables } from '@styles/base/variables';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: variables.paddings.xl,
    gap: 40,
  },
  quiz: {
    backgroundColor: variables.colors.secondary,
    borderRadius: variables.borderRadius.l,
    padding: variables.paddings.m,
    display: 'flex',
    flexDirection: 'row',
  },
  info: {
    flex: 0.8,
    padding: variables.paddings.s,
  },
  icon: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: variables.fontSizes.l,
    fontWeight: '500',
    color: variables.colors.textLight,
  },
  description: {
    fontSize: variables.fontSizes.m,
    fontWeight: '500',
    color: variables.colors.textGray,
  },
  no_item_text: {
    padding: variables.paddings.m,
    textAlign: 'center',
    flex: 1,
  },
});
