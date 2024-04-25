import { variables } from '@styles/base/variables';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: variables.margins.s,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: variables.colors.border,
    borderRadius: variables.borderRadius.xxl,
    overflow: 'hidden',
  },
  prize: {
    width: '100%',
    height: '100%',
    gap: variables.spacings.s,
  },
  prize_text: {
    fontSize: variables.fontSizes.l,
    color: variables.colors.secondary,
    fontWeight: '500',
  },
});
