import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useAppFonts } from '../../fonts';

const TestFont = () => {
  const fontsLoaded = useAppFonts();
  if (!fontsLoaded) return <AppLoading />;
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Teste com Poppins 700 Bold</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
  },
  text: {
    fontSize: 24,
    color: '#fff',
    fontFamily: 'Poppins_700Bold',
  },
});

export default TestFont;
