import { variables } from '@styles/base/variables';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  text: {
    fontWeight: '600',
  },
  icon_left: {
    position: 'absolute',
    left: variables.spacings.m,
  },
  icon_right: {
    position: 'absolute',
    right: variables.spacings.m,
  },
});
