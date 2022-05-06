import React from 'react';
import { ActivityIndicator, TouchableOpacityProps } from 'react-native';
import { useTheme } from 'styled-components';

import {
  Container,
  ButtonText
} from './styles';

interface ButtonProps extends TouchableOpacityProps {
  isLoading: boolean;
}

export function Button({ isLoading, ...rest }: ButtonProps){
  const theme = useTheme();
  return (
    <Container {...rest}>
      {
        isLoading ? <ActivityIndicator color={theme.colors.text_on_brand_color} /> : <ButtonText>Enviar Feedback</ButtonText>
      }
    </Container>
  );
}