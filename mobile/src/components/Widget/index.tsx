import React, { useRef } from 'react';
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

export type FeedbackType = keyof typeof feedbackTypes;

export function Widget(){

  const bottomSheetRef = useRef<BottomSheet>(null);
  const theme = useTheme();

  function handleOpen() {
    bottomSheetRef.current?.expand();
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
        {/* <Options /> */}
        <Form feedbackType='BUG' />
      </BottomSheet>
    </Container>
  );
}