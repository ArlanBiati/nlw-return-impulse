import React from 'react';
import { feedbackTypes } from '../../utils/feedbackTypes';
import { Copyright } from '../Copyright/inde';
import { Option } from '../Option';

import {
  Container,
  TitleWrapper,
  OptionsWrapper
} from './styles';

export function Options(){
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
            />
          ))
        }
      </OptionsWrapper>
      <Copyright />
    </Container>
  );
}