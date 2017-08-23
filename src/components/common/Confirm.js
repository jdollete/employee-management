import React from 'react';
import { Text, View, Modal, StyleSheet } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';

const Confirm = ({ children, visible, onConfirm, onCancel }) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={() => {}}
    >
      <View>
        <CardSection>
          <Text>
            {children}
          </Text>
        </CardSection>

        <CardSection>
          <Button onPress={onConfirm}>Confirm</Button>
          <Button onPress={onCancel}>Cancel</Button>
        </CardSection>
      </View>
    </Modal>
  );

};

export { Confirm };
