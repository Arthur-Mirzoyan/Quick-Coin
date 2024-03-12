import { variables } from '@styles/base/variables';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  box: {
    width: '100%',
    gap: variables.spacings.xs,
    borderBottomWidth: 2,
    borderBottomColor: variables.colors.border,
  },
  title: {
    color: variables.colors.textGray,
    fontSize: variables.fontSizes.m,
    fontWeight: '400',
  },
  input_box: {
    display: 'flex',
    flexDirection: 'row',
    gap: variables.spacings.m,
    paddingVertical: variables.paddings.s,
  },
  input: {
    flex: 1,
    color: variables.colors.secondary,
    fontWeight: '400',
    fontSize: variables.fontSizes.l,
  },
});
