import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import IllyrianShield from '../assets/IllyrianShield.png';


export default function HomeScreen({ navigation }) {
  return (
    <LinearGradient
      colors={['#ffa600fb', '#FFD700']}   // gold → light yellow
      style={styles.container}
    >
      <View style={styles.content}>

        <Image 
          source={IllyrianShield}
          style={styles.logo}
        />

        <Text style={styles.title}>Drita</Text>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, styles.registerButton]}
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>

      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
    resizeMode: 'contain',
  },

  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#6A4B00',   // deep golden-brown text
    marginBottom: 40,
  },

  button: {
    backgroundColor: '#6A4B00', // dark gold/brown button
    paddingVertical: 14,
    paddingHorizontal: 80,
    borderRadius: 10,
    marginBottom: 20,
  },

  registerButton: {
    backgroundColor: '#8C5F00', // slightly lighter gold for Register
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
