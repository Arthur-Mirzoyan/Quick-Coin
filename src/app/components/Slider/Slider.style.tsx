import { variables } from '@styles/base/variables';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    gap: variables.spacings.m,
  },
  slider: {
    backgroundColor: '#929191',
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
