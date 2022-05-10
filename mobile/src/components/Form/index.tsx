import React, { useState } from 'react';
import { useTheme } from 'styled-components';

import { captureScreen } from 'react-native-view-shot';
import { ArrowLeft } from 'phosphor-react-native';

import * as FileSystem from 'expo-file-system';

import { FeedbackType } from '../Widget';
import { ScreenshotButton } from '../ScreenshotButton';
import { Button } from '../Button';

import { feedbackTypes } from '../../utils/feedbackTypes';
import { api } from '../../libs/api';

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

interface FormProps {
  feedbackType: FeedbackType;
  onFeedbackCanceled: () => void;
  onFeedbackSent: () => void;
}

export function Form({ feedbackType, onFeedbackCanceled, onFeedbackSent }: FormProps){
  const theme = useTheme();

  const [isSendingFeedback, setIsSendingFeedback] = useState(false);
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState('');

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

  async function handleSendFeedback() {
    if(isSendingFeedback) {
      return;
    }

    setIsSendingFeedback(true);

    const screenshotBase64 = screenshot && await FileSystem.readAsStringAsync(screenshot, { encoding: 'base64' });

    try {
      await api.post('/feedbacks', {
        type: feedbackType,
        screenshot: `data:image/png;base64, ${screenshotBase64}`,
        comment
      });

      onFeedbackSent();

    } catch (error) {
      console.log(error)
      setIsSendingFeedback(false);
    }
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

      <Input
        onChangeText={setComment}
        value={comment}
      />

      <Footer>
        <ScreenshotButton
          onTakeShot={handleScreenshot}
          onRemoveShot={handleScreenshotRemove}
          screenshot={screenshot}
        />
        <Button
          isLoading={isSendingFeedback}
          onPress={handleSendFeedback}
        />
      </Footer>
    </Container>
  );
}