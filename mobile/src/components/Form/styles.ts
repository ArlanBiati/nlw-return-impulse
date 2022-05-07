import styled from 'styled-components/native';
import theme from '../../global/themes/theme';

export const Container = styled.View`
  padding: 0 24px;

  align-items: center;
`;

export const Header = styled.View`
  flex-direction: row;

  margin: 16px 0;
`;

export const BackButton = styled.TouchableOpacity``;

export const TitleContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding-right: 24px;
`;

export const Image = styled.Image`
  width: 24px;
  height: 24px;

  margin-right: 8px;
`;

export const TitleText = styled.Text`
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.medium};

  color: ${({ theme }) => theme.colors.text_primary};
`;

export const Input = styled.TextInput.attrs({
  multiline: true,
  placeholder: 'Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo.',
  placeholderTextColor: theme.colors.text_secondary,
  autoCorrect: false
})`
  height: 112px;
  width: 100%;
  padding: 12px;
  margin-bottom: 8px;

  border-radius: 4px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.stroke};

  color: ${({ theme }) => theme.colors.text_primary};

  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const Footer = styled.View`
  flex-direction: row;

  margin-bottom: 16px;
`;