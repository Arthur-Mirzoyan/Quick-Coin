import React, { PropsWithChildren } from 'react';
import { View } from 'react-native';
import Modal from 'react-native-modal';
import { styles } from './Popup.style';

type PopupProps = {
  modalVisibility: boolean;
  setModalVisibility: Function;
  onClose?: Function;
};

export function Popup(props: PropsWithChildren<PopupProps>) {
  const { modalVisibility, setModalVisibility, children, onClose } = props;

  return (
    <Modal
      isVisible={modalVisibility}
      hasBackdrop={true}
      backdropColor="rgba(0, 0, 0, 0.5)"
      style={styles.modal}
      onBackdropPress={() => {
        onClose?.();
        setModalVisibility(false);
      }}
      onBackButtonPress={() => {
        onClose?.();
        setModalVisibility(false);
      }}
    >
      <View style={styles.modal_box}>{children}</View>
    </Modal>
  );
}
