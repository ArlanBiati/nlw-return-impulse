import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { ArrowLeft } from 'phosphor-react-native';

import { FeedbackType } from '../Widget';

import { feedbackTypes } from '../../utils/feedbackTypes';


import {
  Container,
  Header,
  BackButton,
  TitleContainer,
  Image,
  TitleText,
  Input,
  Footer
} from './styles';
import { ScreenshotButton } from '../ScreenshotButton';
import { Button } from '../Button';
import { captureScreen } from 'react-native-view-shot';

interface FormProps {
  feedbackType: FeedbackType;
  onFeedbackCanceled: () => void;
  onFeedbackSent: () => void;
}

export function Form({ feedbackType, onFeedbackCanceled, onFeedbackSent }: FormProps){
  const theme = useTheme();

  const [screenshot, setScreenshot] = useState<string | null>(null);

  const feedbackTypeInfo = feedbackTypes[feedbackType];

  function handleScreenshot() {
    captureScreen({
      format: 'jpg',
      quality: 0.8
    })
    .then(uri => setScreenshot(uri))
    .catch(error => console.log(error));
  }

  function handleScreenshotRemove() {
    setScreenshot(null)
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={onFeedbackCanceled} >
          <ArrowLeft
            size={24}
            weight='bold'
            color={theme.colors.text_secondary}
          />
        </BackButton>

        <TitleContainer>
          <Image source={feedbackTypeInfo.image} />
          <TitleText>
            {feedbackTypeInfo.title}
          </TitleText>
        </TitleContainer>
      </Header>

      <Input />

      <Footer>
        <ScreenshotButton
          onTakeShot={handleScreenshot}
          onRemoveShot={handleScreenshotRemove}
          screenshot={screenshot}
        />
        <Button isLoading={false} />
      </Footer>
    </Container>
  );
}