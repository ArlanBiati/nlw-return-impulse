import { getBottomSpace } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const WidgetButton = styled.TouchableOpacity`
  width: 48px;
  height: 48px;

  border-radius: 24px;

  background-color: ${({ theme }) => theme.colors.brand};

  justify-content: center;
  align-items: center;

  position: absolute;
  right: 16px;
  bottom: ${getBottomSpace() + 16}px;
`;