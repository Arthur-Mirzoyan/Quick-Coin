import { variables } from '@styles/base/variables';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    gap: variables.spacings.m,
    backgroundColor: variables.colors.primary,
    borderRadius: variables.borderRadius.xl,
    paddingHorizontal: variables.paddings.xxl,
    paddingVertical: variables.paddings.l,
  },
  title: {
    fontSize: variables.fontSizes.l,
    fontWeight: '500',
    color: variables.colors.textLight,
  },
  slider: {
    backgroundColor: '#525151',
    borderRadius: variables.borderRadius.xxl,
    height: 10,
    width: '100%',
  },
  slider_filled: {
    backgroundColor: 'white',
    borderRadius: variables.borderRadius.xxl,
    height: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    minWidth: 12,
  },
  slider_trigger: {
    height: 18,
    width: 18,
    borderRadius: 9,
    borderWidth: 4,
    borderColor: variables.colors.tertiary,
    backgroundColor: 'white',
  },
  small_text: {
    fontSize: variables.fontSizes.s,
    fontWeight: '400',
    color: variables.colors.textGray,
  },
  data_box: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
