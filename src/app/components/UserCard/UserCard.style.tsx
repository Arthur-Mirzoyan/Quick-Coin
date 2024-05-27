import { StyleSheet } from 'react-native';
import { variables } from '@styles/base/variables';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    gap: variables.spacings.m,
  },
  photo: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
    borderRadius: 40,
    overflow: 'hidden',
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
  },
  welcoming_box: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingVertical: variables.paddings.s,
  },
  welcoming_text: {
    fontSize: variables.fontSizes.m,
    fontWeight: '400',
    color: variables.colors.textGray,
  },
  user_name: {
    fontSize: variables.fontSizes.l,
    fontWeight: '500',
    color: variables.colors.primary,
  },
});
