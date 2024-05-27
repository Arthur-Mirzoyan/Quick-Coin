import { StyleSheet } from 'react-native';
import { variables } from '@styles/base/variables';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: variables.paddings.xl,
    gap: variables.spacings.xl,
  },
  title: {
    color: variables.colors.primary,
    fontSize: variables.fontSizes.l,
    fontWeight: '600',
  },
  question_title_box: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    backgroundColor: variables.colors.secondary,
    borderRadius: variables.borderRadius.l,
    padding: variables.paddings.m,
  },
  text: {
    color: variables.colors.textLight,
    fontSize: variables.fontSizes.l,
  },
  questions: {
    gap: variables.spacings.xxl,
  },
  questions_header_box: {
    backgroundColor: variables.colors.bg,
    paddingVertical: variables.paddings.m,
  },
  question_box: {
    gap: variables.spacings.m,
  },
  options_box: {
    gap: variables.spacings.s,
  },

  dropdownButtonStyle: {
    backgroundColor: '#bbb',
    borderRadius: variables.borderRadius.l,
    padding: variables.paddings.m,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  dropdownButtonTxtStyle: {
    fontSize: variables.fontSizes.m,
    fontWeight: '500',
    textAlign: 'center',
    color: variables.colors.primary,
  },
  dropdownMenuStyle: {
    backgroundColor: '#E9ECEF',
    borderRadius: variables.borderRadius.l,
  },
  dropdownItemStyle: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    fontSize: variables.fontSizes.l,
    fontWeight: '500',
    textAlign: 'center',
    color: variables.colors.primary,
  },
});
