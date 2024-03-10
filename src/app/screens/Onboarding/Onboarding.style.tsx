import { variables } from '@styles/base/variables';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  main: {
    flex: 3,
    alignItems: 'center'
  },
  paginator: {
    position: 'absolute',
    top: '60%'
  },
  footer: {
    width: '100%',
    padding: variables.paddings.xl,
  },
  button: {
    backgroundColor: variables.colors.primary,
    padding: variables.paddings.l,
    borderRadius: variables.borderRadius.l,
    width: '100%',
  },
  button_text: {
    fontSize: variables.fontSizes.m,
    color: variables.colors.textLight,
  },
});
