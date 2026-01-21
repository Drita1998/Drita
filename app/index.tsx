import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';

export default function LandingPage() {
  const handleEnterApp = () => {
    router.push('/login');
  };

  return (
    <LinearGradient
      colors={['#ffa600fb', '#FFD700']}
      style={styles.container}
    >
      <View style={styles.content}>
        <Image 
          source={require('../assets/IllyrianShield.png')}
          style={styles.logo}
        />
        
        <Text style={styles.title}>Drita</Text>
        
        <Text style={styles.tagline}>
          Connect with the Diaspora Community
        </Text>

        <TouchableOpacity 
          style={styles.button}
          onPress={handleEnterApp}
        >
          <Text style={styles.buttonText}>Enter App</Text>
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
    color: '#6A4B00',
    marginBottom: 10,
  },
  tagline: {
    fontSize: 18,
    color: '#6A4B00',
    opacity: 0.8,
    marginBottom: 40,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#6A4B00',
    paddingVertical: 14,
    paddingHorizontal: 80,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

