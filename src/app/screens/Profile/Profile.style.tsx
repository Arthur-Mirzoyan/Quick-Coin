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
    backgroundColor: variables.colors.primary,
    borderRadius: 100,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  edit_button_button_text: {
    color: variables.colors.textLight,
    fontWeight: '500',
    fontSize: variables.fontSizes.m,
  },
});
