import { StyleSheet, Dimensions } from 'react-native';
import { variables } from '@src/styles/base/variables';

const windowWidth = Dimensions.get('window').width;
const paddingAppliedOnTheScreen = variables.paddings.xl;

export const styles = StyleSheet.create({
  container: {
    width: windowWidth - paddingAppliedOnTheScreen * 2,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: variables.colors.secondary,
    borderRadius: variables.borderRadius.l,
    marginRight: 20,
    padding: variables.paddings.m,
  },
  img: {
    flex: 1,
    resizeMode: 'contain',
  },
});
