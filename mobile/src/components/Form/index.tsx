import React from 'react';
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

interface FormProps {
  feedbackType: FeedbackType;
}

export function Form({ feedbackType }: FormProps){
  const theme = useTheme();

  const feedbackTypeInfo = feedbackTypes[feedbackType];

  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}} >
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
          onTakeShot={() => {}}
          onRemoveShot={() => {}}
          screenshot='https://github.com/arlanbiati.png'
        />
        <Button isLoading={false} />
      </Footer>
    </Container>
  );
}