import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;

  border-radius: 4px;

  height: 40px;

  background-color: ${({ theme }) => theme.colors.brand};
`;

export const ButtonText = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.medium};

  color: ${({ theme }) => theme.colors.text_on_brand_color};
`;