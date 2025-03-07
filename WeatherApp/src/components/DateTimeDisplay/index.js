import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DateTimeDisplay() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const dayOfWeek = dateTime.toLocaleDateString('en-US', { weekday: 'long' });
  const dayOfMonth = dateTime.getDate();
  const month = dateTime.toLocaleDateString('en-US', { month: 'long' });
  const time = dateTime.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });

  const formattedDateTime = `${dayOfWeek}, ${dayOfMonth} ${month} ${time}`;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{formattedDateTime}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  
});
