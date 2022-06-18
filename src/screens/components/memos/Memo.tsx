import { memo, useCallback, useMemo, useState } from 'react';
import styled from '@emotion/native';
import { Pressable, Text } from 'react-native';

import { SafeAreaContainer } from '../../../components/layout';
import { MainHeader } from '../../../components/common';
import DeleteModal from '../../../components/common/DeleteModal';

const Container = styled.View(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.color.background,
}));

const Memo = () => {
  const [isOpen, setIsOpen] = useState(false);

  const notification = useMemo(() => {
    return '메모를 삭제하시겠습니까?\n삭제를 하면 대화내용이 모두 삭제되고\n리스트 목록에서도 삭제됩니다.';
  }, []);

  const onPress = useCallback(() => {
    setIsOpen(true);
  }, []);

  const onNegative = useCallback(() => {
    setIsOpen(false);
  }, []);

  const onPostive = useCallback(() => {
    // TODO: Some todo

    setIsOpen(false);
  }, []);

  return (
    <SafeAreaContainer>
      <Container>
        <MainHeader title="List" />

        <Pressable onPress={onPress}>
          <Text>모달 테스트</Text>
        </Pressable>

        {isOpen && (
          <DeleteModal
            isOpen={isOpen}
            notification={notification}
            onNegative={onNegative}
            onPostive={onPostive}
          />
        )}
      </Container>
    </SafeAreaContainer>
  );
};

export default memo(Memo);
