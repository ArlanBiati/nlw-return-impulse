import React from 'react';

import successImg from '../../assets/success.png';

import { Copyright } from '../Copyright/inde';

import {
  Container,
  SuccessImage,
  Title,
  Button,
  ButtonTitle
} from './styles';

interface SuccessProps {
  onSendAnotherFeedback: () => void;
}

export function Success({ onSendAnotherFeedback }: SuccessProps){
  return (
    <Container>
      <SuccessImage source={successImg}/>
      <Title>Agradecemos o feedback</Title>
      <Button onPress={onSendAnotherFeedback}>
        <ButtonTitle>
          Quero enviar outro feedbakc
        </ButtonTitle>
      </Button>

      <Copyright />
    </Container>
  );
}