import { memo, useEffect, useMemo, useState } from 'react';
import { View } from 'react-native';
import { useTheme } from '@emotion/react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import {
  MemoScreenNavigationProp,
  MemoScreenRouteProp,
} from '../../stacks/MemoStack';
import { ScreenContainer } from '../../../components/layout';
import { IconHeader } from '../../../components/common/header';
import { StyledText } from '../../../components/common/text';
import { RoomEntity } from '../../../model';
import { ellipsize } from '../../../api/utils/ellipsize';

const Room = () => {
  const theme = useTheme();

  const { params } = useRoute<MemoScreenRouteProp>();
  const navigation = useNavigation<MemoScreenNavigationProp>();

  const [post, setPost] = useState<RoomEntity>();

  const insets = useMemo(() => -(getStatusBarHeight() * 2), []);

  useEffect(() => {
    setPost(params);
  }, [params, post]);

  return (
    <View style={{ flex: 1 }}>
      <IconHeader
        onBackPress={() => navigation.goBack()}
        title={
          post?.title!! && post.title.length < 15
            ? post?.title
            : `${post?.title.substring(0, 15)}...`
        }
        backIcon
        marginBottom={insets}
        one={theme.icon.more}
        onOnePress={() => console.log('more')}
      />

      <ScreenContainer>
        <StyledText>{ellipsize('sadfklasdfljaslkdfjlkasdjflkj', 5)}</StyledText>
      </ScreenContainer>
    </View>
  );
};

export default memo(Room);
