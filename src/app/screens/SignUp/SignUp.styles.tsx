import { StyleSheet } from 'react-native';
import { variables } from '@styles/base/variables';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: variables.paddings.xl,
  },
  back_btn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: variables.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  main: {
    flex: 1,
    gap: variables.spacings.xxl,
    marginTop: variables.margins.xxl,
  },
  main_title: {
    color: variables.colors.secondary,
    fontSize: variables.fontSizes.xxxl,
    fontWeight: '500',
  },
  inputs_view: {
    gap: variables.spacings.l,
  },
  input_box: {
    gap: variables.spacings.m,
    borderBottomWidth: 2,
    borderBottomColor: variables.colors.border,
  },
  input_title: {
    color: variables.colors.textGray,
    fontSize: variables.fontSizes.m,
    fontWeight: '400',
  },
  input_box_box: {
    gap: variables.spacings.m,
    paddingVertical: variables.paddings.s,
  },
  input: {
    color: variables.colors.secondary,
    fontWeight: '400',
    fontSize: variables.fontSizes.l,
  },
  footer: {
    gap: variables.spacings.l,
  },
  signup_button: {
    backgroundColor: variables.colors.primary,
    padding: variables.paddings.l,
    borderRadius: variables.borderRadius.l,
  },
  signup_button_text: {
    color: variables.colors.textLight,
    fontSize: variables.fontSizes.l,
    fontWeight: '600',
  },
  signin_button: {
    display: 'flex',
    flexDirection: 'row',
    gap: variables.spacings.xs,
    justifyContent: 'center',
  },
  signin_button_text: {
    color: variables.colors.textGray,
    fontSize: variables.fontSizes.m * 1.1,
    fontWeight: '400',
  },
  signup_button_text_signup: {
    fontWeight: '500',
    color: variables.colors.secondary,
  },
});
