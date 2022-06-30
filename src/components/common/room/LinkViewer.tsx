import { FC, memo, useCallback, useMemo } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import {
  LinkPreview,
  PreviewDataImage,
} from '@flyerhq/react-native-link-preview';
import styled from '@emotion/native';
import { useTheme } from '@emotion/react';

import { StyledText } from '../text';
import { ellipsize } from '../../../api/utils/ellipsize';

const DescriptionContainer = styled.View({
  justifyContent: 'center',
  paddingVertical: 3,
});

const PreviewImage = styled.Image({
  height: 100,
  backgroundColor: 'orange',
  resizeMode: 'center',
  borderRadius: 5,
});

interface ILinkViewer {
  link: string;
}

const LinkViewer: FC<ILinkViewer> = ({ link }) => {
  const theme = useTheme();

  const containerStyle = useMemo<StyleProp<ViewStyle>>(() => {
    return {
      paddingVertical: 5,
    };
  }, []);

  const textContainerStyle = useMemo<StyleProp<ViewStyle>>(() => {
    return {
      marginHorizontal: 0,
      marginVertical: 0,
    };
  }, []);

  const renderText = useCallback(
    (text: string) => {
      return text ? (
        <StyledText color={theme.color.white} fontSize={13}>
          {ellipsize(text, 30)}
        </StyledText>
      ) : (
        <View />
      );
    },
    [theme.color.white]
  );

  const renderTitle = useCallback(
    (title: string) => {
      return title ? (
        <StyledText color={theme.color.white} fontSize={12} isBlod>
          {ellipsize(title, 7)}
        </StyledText>
      ) : (
        <View />
      );
    },
    [theme.color.white]
  );

  const renderImage = useCallback((image: PreviewDataImage) => {
    return image.url && <PreviewImage source={{ uri: image.url }} />;
  }, []);

  const renderDescription = useCallback(
    (description: string) => {
      return description ? (
        <DescriptionContainer>
          <StyledText color={theme.color.white} fontSize={10}>
            {ellipsize(description, 10)}
          </StyledText>
        </DescriptionContainer>
      ) : (
        <View />
      );
    },
    [theme.color.white]
  );

  return (
    <LinkPreview
      text={link}
      renderText={renderText}
      renderTitle={renderTitle}
      renderDescription={renderDescription}
      containerStyle={containerStyle}
      renderImage={renderImage}
      textContainerStyle={textContainerStyle}
    />
  );
};

export default memo(LinkViewer);
