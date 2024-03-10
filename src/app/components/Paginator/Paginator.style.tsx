import { StyleSheet } from 'react-native';
import { variables } from '@src/styles/base/variables';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: 64,
  },
  dot: {
    height: 10,
    borderRadius: 5,
    backgroundColor: variables.colors.primary,
    marginHorizontal: 8,
  },
});
