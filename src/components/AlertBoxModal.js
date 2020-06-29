import Modal from 'react-native-modal';
import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';

const AlertBoxModal = ({visible}) => {
  const [showModal, setShowModal] = useState(false);

  const errorMessage = useSelector(state => state.showError.errorMessage);

  useEffect(() => {
    setShowModal(visible);
  }, [visible]);

  return (
    <View>
      <Modal isVisible={showModal}>
        <View>
          <Text>{errorMessage}</Text>
        </View>
      </Modal>
    </View>
  );
};

export default AlertBoxModal;
