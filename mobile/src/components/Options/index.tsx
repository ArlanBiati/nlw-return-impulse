import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { feedbackTypes } from '../../utils/feedbackTypes';
import { Copyright } from '../Copyright/inde';
import { Option } from '../Option';
import { FeedbackType } from '../Widget';

import {
  Container,
  TitleWrapper,
  OptionsWrapper
} from './styles';

interface OptionsProps extends TouchableOpacityProps {
  onFeedbackTypeChanged: (feedbackType: FeedbackType) => void;
}

export function Options({ onFeedbackTypeChanged }: OptionsProps){
  return (
    <Container>
      <TitleWrapper>Deixe seu feedback</TitleWrapper>
      <OptionsWrapper>
        {
          Object.entries(feedbackTypes).map(([key, value]) => (
            <Option
              key={key}
              image={value.image}
              title={value.title}
              onPress={() => onFeedbackTypeChanged(key as FeedbackType)}
            />
          ))
        }
      </OptionsWrapper>
      <Copyright />
    </Container>
  );
}