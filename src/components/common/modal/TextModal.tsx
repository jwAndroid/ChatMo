import React, { FC, memo } from 'react';
import { Modal } from 'react-native';
import styled from '@emotion/native';

const Container = styled.Pressable({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  paddingHorizontal: 40,
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
});

const TextContainer = styled.View(() => ({
  width: '100%',
  paddingVertical: 20,
  paddingHorizontal: 30,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 16,
  backgroundColor: '#EFEFEF',
}));

const ModalText = styled.Text(({ theme }) => ({
  includeFontPadding: false,
  textAlign: 'center',
  fontSize: 14,
  color: theme.color.black,
}));

interface ITextModal {
  isOpen: boolean;
  notification: string;
}

const TextModal: FC<ITextModal> = ({ isOpen, notification }) => {
  return (
    <Modal transparent visible={isOpen} animationType="fade">
      <Container>
        <TextContainer>
          <ModalText>{notification}</ModalText>
        </TextContainer>
      </Container>
    </Modal>
  );
};

export default memo(TextModal);
