import { useFonts } from 'expo-font';
import { 
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_700Bold, 
} from '@expo-google-fonts/poppins';
import {
  Lexend_400Regular,
  Lexend_500Medium,
  Lexend_700Bold,
} from '@expo-google-fonts/lexend';

export const useAppFonts = () => {
  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_700Bold,
    Lexend_400Regular,
    Lexend_500Medium,
    Lexend_700Bold,
  });
  return fontsLoaded;
};
