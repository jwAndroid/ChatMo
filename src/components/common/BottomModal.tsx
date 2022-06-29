import { FC, memo } from 'react';
import styled from '@emotion/native';
import { GestureResponderEvent, Modal, Text, View } from 'react-native';
import { useTheme } from '@emotion/react';
import { IMessage } from 'react-native-gifted-chat';

const Container = styled.Pressable({
  flex: 1,
  justifyContent: 'flex-end',
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
});

const Box = styled.View(() => ({
  width: '100%',
  flexDirection: 'row',
  height: 45,
  alignItems: 'center',
  paddingHorizontal: 10,
  backgroundColor: 'orange',
}));

interface ICircle {
  marginLeft?: number;
}

const Circle = styled.Pressable<ICircle>(({ marginLeft }) => ({
  width: 40,
  height: 40,
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft,
  borderRadius: 50 / 2,
  backgroundColor: 'gray',
}));

const Icon = styled.Image(() => ({
  width: 25,
  height: 25,
  tintColor: 'white',
}));

interface IBottomModal {
  isOpen: boolean;
  onPress: (event: GestureResponderEvent) => void;
  onPressCircle?: (event: GestureResponderEvent) => void;
  message?: IMessage;
}

const BottomModal: FC<IBottomModal> = ({
  isOpen,
  onPress,
  onPressCircle,
  message,
}) => {
  const theme = useTheme();

  return (
    <Modal transparent visible={isOpen} animationType="fade">
      <Container onPress={onPress}>
        {message && (
          <View style={{ width: '100%', height: 20, backgroundColor: 'gray' }}>
            <Text>{message?.text}</Text>
          </View>
        )}

        <Box>
          <Circle onPress={onPressCircle}>
            <Icon source={theme.icon.bubble_check} />
          </Circle>

          <Circle onPress={onPressCircle} marginLeft={10}>
            <Icon source={theme.icon.delete} />
          </Circle>
        </Box>
      </Container>
    </Modal>
  );
};

export default memo(BottomModal);
