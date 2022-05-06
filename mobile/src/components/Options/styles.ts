import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  align-items: center;
`;

export const TitleWrapper = styled.Text`
  font-size: 20px;
  font-family:  ${({ theme }) => theme.fonts.medium};

  color: ${({ theme }) => theme.colors.text_primary};

  margin-bottom: 32px;
`;

export const OptionsWrapper = styled.View`
  width: 100%;

  margin-bottom: 48px;

  flex-direction: row;
  justify-content: center;
`;