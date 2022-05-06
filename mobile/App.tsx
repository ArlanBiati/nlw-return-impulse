import 'react-native-gesture-handler';

import React from 'react';
import { ThemeProvider } from 'styled-components';

import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import theme from './src/global/themes/theme';
import { Widget } from './src/components/Widget';

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium
} from '@expo-google-fonts/inter';
import { View } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        translucent
        backgroundColor='transparent'
        style='light'
      />
      <Widget />
    </ThemeProvider>
  )
}
