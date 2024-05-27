import { StyleSheet } from 'react-native';
import { variables } from '@styles/base/variables';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: variables.paddings.xl,
    gap: 20,
  },
  header: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  user_card: {
    flex: 1,
  },
  edit_button: {
    backgroundColor: variables.colors.secondary,
    borderRadius: 100,
    padding: variables.paddings.m * 1.25,
  },
  info_view: {
    gap: variables.spacings.xl,
  },
  modal_view: {
    backgroundColor: variables.colors.bg,
    display: 'flex',
    flexDirection: 'column',
    gap: variables.spacings.l,
    paddingVertical: variables.paddings.xl,
    paddingHorizontal: variables.paddings.xl,
    borderTopLeftRadius: variables.borderRadius.xl,
    borderTopRightRadius: variables.borderRadius.xl,
  },
  edit_option_button: {
    backgroundColor: variables.colors.secondary,
    borderRadius: variables.borderRadius.l,
    padding: variables.paddings.m,
  },
  edit_button_button_text: {
    color: variables.colors.textLight,
    fontWeight: '500',
    fontSize: variables.fontSizes.m,
  },
  admin_button: {
    backgroundColor: variables.colors.secondary,
    borderRadius: variables.borderRadius.l,
    padding: variables.paddings.m,
    marginTop: variables.margins.l,
  },
  admin_text: {
    color: variables.colors.textLight,
    fontSize: variables.fontSizes.l,
  },
});
