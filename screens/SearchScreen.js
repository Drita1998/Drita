// screens/SearchScreen.js
import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Search everything..." style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, padding: 16, backgroundColor: '#fff', justifyContent: 'center' },
  input: { backgroundColor: '#eee', padding: 12, borderRadius: 10 }
});
