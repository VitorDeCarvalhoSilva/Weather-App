import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { getCurrentCityAndState } from '../../services/GeoLocationService';

export default function Location({ city: defaultCity }) {
  const [location, setLocation] = useState(defaultCity || '');
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchLocation() {
      try {
        const loc = await getCurrentCityAndState();
        setLocation(loc);
      } catch (err) {
        setError(err.message);
      }
    }
    fetchLocation();
  }, []);

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>Erro: {error}</Text>
      </View>
    );
  } 

  if (!location) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="small" color="#fff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{location}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // Estilização para centralizar o conteúdo
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  error: {
    fontSize: 16,
    color: 'red',
  },
});
