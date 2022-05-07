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

export function Success(){
  return (
    <Container>
      <SuccessImage source={successImg}/>
      <Title>Agradecemos o feedback</Title>
      <Button>
        <ButtonTitle>
          Quero enviar outro feedbakc
        </ButtonTitle>
      </Button>

      <Copyright />
    </Container>
  );
}