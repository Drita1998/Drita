import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function EconomicsTab() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Economics Tab</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});
