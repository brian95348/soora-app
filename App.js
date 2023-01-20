import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { Provider as PaperProvider, Portal } from 'react-native-paper';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { useFonts as useInter, Inter_800ExtraBold, Inter_500Medium, Inter_400Regular, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter'
import { theme } from './src/infrastructure/theme/index';
import Home from './src/features/home/screens/home';

export default function App() { 
  const [interExtraBoldLoaded] = useInter({ Inter_800ExtraBold })
  const [interBoldLoaded] = useInter({ Inter_700Bold})
  const [interSemiLoaded] = useInter( { Inter_600SemiBold })
  const [interMediumLoaded] = useInter({ Inter_500Medium })
  const [interRegularLoaded] = useInter( { Inter_400Regular })


  if (!interExtraBoldLoaded || !interBoldLoaded || !interMediumLoaded || !interRegularLoaded || !interSemiLoaded) {
    return null;
  }
  return ( 
    <>
    <PaperProvider>
      <Portal>
      <ThemeProvider theme={theme} >
        <Home />
      </ThemeProvider>
      </Portal>
    </PaperProvider>
    <ExpoStatusBar style='auto' />
    </>
  );
}


