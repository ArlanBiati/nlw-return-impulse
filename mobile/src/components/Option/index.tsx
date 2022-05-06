import React from 'react';
import { ImageProps, TouchableOpacityProps } from 'react-native';

import {
  Container,
  OptionImage,
  OptionTitle
} from './styles';

interface OptionProps extends TouchableOpacityProps {
  title: string;
  image: ImageProps;
}

export function Option({ title, image, ...rest }: OptionProps){
  return (
    <Container {...rest} onPress={() => {}}>
      <OptionImage source={image} />
      <OptionTitle>
        {title}
      </OptionTitle>
    </Container>
  );
}