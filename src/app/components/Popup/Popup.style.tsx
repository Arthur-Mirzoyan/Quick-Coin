import { StyleSheet, Dimensions } from 'react-native';
import { variables } from '@styles/base/variables';

export const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modal_box: {
    width: '100%',
    marginBottom: -variables.margins.l,
    height: 'auto',
    borderTopRightRadius: variables.borderRadius.l,
    borderTopLeftRadius: variables.borderRadius.l,
    overflow: 'hidden',
  },
});
