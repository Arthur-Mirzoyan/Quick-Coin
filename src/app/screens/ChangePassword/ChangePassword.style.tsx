import { StyleSheet } from 'react-native';
import { variables } from '@styles/base/variables';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: variables.paddings.xl,
    gap: 50,
  },
  info_view: {
    gap: variables.spacings.xl,
  },
  save_button: {
    backgroundColor: variables.colors.primary,
    padding: variables.paddings.l,
    borderRadius: variables.borderRadius.l,
  },
  save_button_text: {
    color: variables.colors.textLight,
    fontSize: variables.fontSizes.l,
    fontWeight: '600',
  },
});
