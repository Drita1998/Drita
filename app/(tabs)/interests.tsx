import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function InterestsTab() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Interests</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fafafa',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});

