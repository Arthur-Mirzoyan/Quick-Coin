import { variables } from '@styles/base/variables';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: variables.paddings.xl,
    gap: variables.spacings.m
  },
  card: {
    flex: 1,
    margin: variables.margins.s,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: 'black',
    borderRadius: variables.borderRadius.xxl,
    overflow: 'hidden',
  },

  icon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  text: {
    fontSize: 13,
    color: variables.colors.secondary,
    fontFamily: 'Poppins_400Regular',
    fontStyle: 'italic',
    fontWeight: '200',
  },
});
