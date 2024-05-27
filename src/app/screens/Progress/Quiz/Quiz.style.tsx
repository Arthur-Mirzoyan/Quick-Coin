import { variables } from '@styles/base/variables';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: variables.paddings.xl,
    gap: 40,
  },
  info_box: {
    gap: variables.spacings.m,
    backgroundColor: variables.colors.secondary,
    borderRadius: variables.borderRadius.l,
    padding: variables.paddings.m,
    paddingTop: variables.paddings.l,
  },
  info: {
    fontSize: variables.fontSizes.l,
    color: variables.colors.textLight,
    textAlign: 'center',
    flex: 1,
  },
  timer_text: {
    color: variables.colors.textLight,
    fontSize: variables.fontSizes.l,
  },
  question_box: {
    gap: variables.spacings.xl,
  },
  question: {
    fontSize: variables.fontSizes.xl,
    fontWeight: '700',
    textAlign: 'center',
    color: variables.colors.primary,
  },
  options: {
    gap: variables.spacings.m,
  },
  option_button: {
    backgroundColor: variables.colors.secondary,
    paddingVertical: variables.spacings.l,
    paddingHorizontal: variables.spacings.m,
    borderRadius: variables.borderRadius.l,
  },
  option_text: {
    fontSize: variables.fontSizes.l,
    color: variables.colors.textLight,
  },
});
