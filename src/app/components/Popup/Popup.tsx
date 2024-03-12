import React, { PropsWithChildren } from 'react';
import { View } from 'react-native';
import { styles } from './Popup.style';
import Modal from 'react-native-modal';

type PopupProps = {
  modalVisibility: boolean;
  setModalVisibility: Function;
  onClose?: Function;
  transparent?: boolean;
};

export function Popup(props: PropsWithChildren<PopupProps>) {
  const { modalVisibility, setModalVisibility, children, transparent, onClose } = props;

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
      onBackButtonPress={() => setModalVisibility((prev: boolean) => !prev)}
    >
      <View style={styles.modal_box}>{children}</View>
    </Modal>
  );
}
