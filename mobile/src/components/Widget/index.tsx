import React, { useRef, useState } from 'react';
import { useTheme } from 'styled-components';
import { ChatTeardropDots } from 'phosphor-react-native';

import BottomSheet from '@gorhom/bottom-sheet';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import { feedbackTypes } from '../../utils/feedbackTypes';

import { Options } from '../Options';


import {
  Container,
  WidgetButton
} from './styles';
import { Form } from '../Form';
import { Success } from '../Success';

export type FeedbackType = keyof typeof feedbackTypes;

export function Widget(){
  const theme = useTheme();
  const bottomSheetRef = useRef<BottomSheet>(null);

  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleOpen() {
    bottomSheetRef.current?.expand();
  }

  function handleRestartFeedback() {
    setFeedbackType(null);
    setFeedbackSent(false);
  }

  function handleFeedbackSent() {
    setFeedbackSent(true);
  }

  return (
    <Container>
      <WidgetButton onPress={handleOpen}>
        <ChatTeardropDots
          size={24}
          color={theme.colors.text_on_brand_color}
          weight='bold'
        />
      </WidgetButton>

      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={[1, 280]}
        backgroundStyle={{
          backgroundColor: theme.colors.surface_primary,
          paddingBottom: getBottomSpace() + 16
        }}
        handleIndicatorStyle={{
          backgroundColor: theme.colors.text_primary,
          width: 56,

        }}
      >
        {
          feedbackSent ?
          <Success />
          :
          <>
            {
              feedbackType ?
              <Form
                feedbackType={feedbackType}
                onFeedbackSent={handleFeedbackSent}
                onFeedbackCanceled={handleRestartFeedback}
              />
              :
              <Options onFeedbackTypeChanged={setFeedbackType} />
            }
          </>
        }
      </BottomSheet>
    </Container>
  );
}