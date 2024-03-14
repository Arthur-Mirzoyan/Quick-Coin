import { variables } from '@styles/base/variables';
import { StyleSheet } from 'react-native';
const ball1Top = 330;
const ball2Bottom = -50;
const ball3Bottom = 70;
const ball4Bottom = 160;

export const styles = StyleSheet.create({
  container: {
    padding: variables.paddings.xl,
    gap: variables.spacings.xs,
  },
  ball1: {
    width: 110,
    height: 110,
    borderRadius: 55,
    position: 'absolute',
    top: ball1Top,
    left: -15,
    zIndex: -1,
    transform: [{ rotate: '-30deg' }],
  },
  ball2: {
    width: 150,
    height: 150,
    borderRadius: 75,
    position: 'absolute',
    bottom: ball2Bottom,
    right: -60,
    zIndex: -1,
  },
  ball3: {
    width: 80,
    height: 80,
    borderRadius: 55,
    position: 'absolute',
    bottom: ball3Bottom,
    left: 150,
    zIndex: -1,
    transform: [{ rotate: '-30deg' }],
  },
  ball4: {
    width: 65,
    height: 65,
    borderRadius: 55,
    position: 'absolute',
    bottom: ball4Bottom,
    right: 5,
    zIndex: -1,
    transform: [{ rotate: '-30deg' }],
  },
});
