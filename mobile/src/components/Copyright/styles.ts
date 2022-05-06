import { getBottomSpace } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const TextCopyright = styled.Text`
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.medium};

  color: ${({ theme }) => theme.colors.text_secondary};
`;