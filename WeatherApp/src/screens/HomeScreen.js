import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import Location from '../components/Location';
import DateTimeDisplay  from '../components/DateTimeDisplay';

export default function HomeScreen() {

  return (
    <LinearGradient
        colors={['rgba(173,185,212,1)', 'rgba(0,30,94,1)']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.container}>


      <View style={styles.location}>
        <Location/>
        <DateTimeDisplay />
      </View>  
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
        
  },
  location: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
});