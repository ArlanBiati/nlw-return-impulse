import React from 'react';
import { Camera, Trash } from 'phosphor-react-native';
import { useTheme } from 'styled-components';

import {
  Container,
  ScreenshotImage
} from './styles';

interface ScreenshotButtonProps {
  screenshot: string | null;
  onTakeShot: () => void;
  onRemoveShot: () => void;
}

export function ScreenshotButton({ screenshot, onTakeShot, onRemoveShot }: ScreenshotButtonProps){
  const theme = useTheme();
  return (
    <Container onPress={ screenshot ? onRemoveShot : onTakeShot }>
      {
        screenshot
          ?
          <>
            <ScreenshotImage source={{ uri: screenshot }} />
            <Trash
              size={22}
              color={theme.colors.text_secondary}
              weight='fill'
              style={{
                position: 'absolute',
                bottom: 0,
                right: 0
              }}
            />
          </>
          :
          <Camera
            size={24}
            color={theme.colors.text_secondary}
            weight='bold'
          />
      }
    </Container>
  );
}