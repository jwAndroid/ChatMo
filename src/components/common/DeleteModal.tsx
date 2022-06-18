import React, { FC, memo } from 'react';
import { GestureResponderEvent, Modal } from 'react-native';
import styled from '@emotion/native';

import Divider from './Divider';
import StyledText from './StyledText';

const Container = styled.Pressable({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  paddingHorizontal: 30,
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
});

const TextContainer = styled.View(() => ({
  width: '100%',
  paddingVertical: 25,
  paddingHorizontal: 30,
  justifyContent: 'center',
  alignItems: 'center',
  borderTopEndRadius: 20,
  borderTopLeftRadius: 20,
  backgroundColor: '#EFEFEF',
}));

const ButtonContainer = styled.View(() => ({
  width: '100%',
  flexDirection: 'row',
  borderBottomEndRadius: 20,
  borderBottomLeftRadius: 20,
  backgroundColor: '#EFEFEF',
}));

const StyledButton = styled.Pressable(() => ({
  flex: 1,
  paddingVertical: 15,
  paddingHorizontal: 25,
  justifyContent: 'center',
  alignItems: 'center',
}));

const ModalText = styled.Text(({ theme }) => ({
  fontFamily: theme.font.YoonGothicRegular,
  includeFontPadding: false,
  textAlign: 'center',
  fontSize: 14,
  color: theme.color.black,
}));

interface ILeaveModal {
  isOpen: boolean;
  notification: string;
  onNegative: () => void;
  onPostive: (event: GestureResponderEvent) => void;
}

const DeleteModal: FC<ILeaveModal> = ({
  isOpen,
  notification,
  onNegative,
  onPostive,
}) => {
  return (
    <Modal
      transparent
      visible={isOpen}
      onDismiss={onNegative}
      animationType="fade"
    >
      <Container onPress={onNegative}>
        <TextContainer>
          <ModalText>{notification}</ModalText>
        </TextContainer>

        <Divider />

        <ButtonContainer>
          <StyledButton onPress={onNegative}>
            <StyledText fontSize={17} color="#5279C8" isBlod>
              아니요
            </StyledText>
          </StyledButton>

          <Divider isVertical />

          <StyledButton onPress={onPostive}>
            <StyledText fontSize={17} color="#5279C8" isBlod>
              예
            </StyledText>
          </StyledButton>
        </ButtonContainer>
      </Container>
    </Modal>
  );
};

export default memo(DeleteModal);
