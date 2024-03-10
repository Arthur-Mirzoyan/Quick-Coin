import { variables } from '@styles/base/variables';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  box: {
    width: '100%',
  },
  input_box: {
    display: 'flex',
    flexDirection: 'row',
    gap: variables.spacings.xs,
  },
  input: {
    flex: 1,
  }
});
