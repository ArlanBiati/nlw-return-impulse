import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 104px;
  height: 112px;

  justify-content: center;
  align-items: center;

  padding: 8px;
  margin: 0px 8px;

  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.surface_secondary};
`;

export const OptionImage = styled.Image`
  width: 40px;
  height: 40px;
`;

export const OptionTitle = styled.Text`
  font-size: 14px;
  font-family:  ${({ theme }) => theme.fonts.medium};

  color: ${({ theme }) => theme.colors.text_primary};

  margin-top: 8px;
`;
