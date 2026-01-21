import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function ProfileTab({ navigation }) {
  return (
    <ScrollView style={{ flex: 1 }}>
      <LinearGradient
        colors={['#ffa600fb', '#FFD700']}
        style={styles.header}
      >
        <View style={styles.profileContainer}>
          <Image
            source={require('../assets/defaultProfile.png')}
            style={styles.profileImage}
          />

          <Text style={styles.name}>Your Name</Text>
          <Text style={styles.handle}>@yourhandle</Text>

          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>

          <View style={styles.statsRow}>
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>10</Text>
              <Text style={styles.statLabel}>Posts</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>250</Text>
              <Text style={styles.statLabel}>Followers</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>180</Text>
              <Text style={styles.statLabel}>Following</Text>
            </View>
          </View>
        </View>
      </LinearGradient>

      <View style={styles.content}>
        <TouchableOpacity
          style={styles.sectionButton}
          onPress={() => navigation.navigate('MyPosts')}
        >
          <Text style={styles.sectionText}>My Posts</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.sectionButton}
          onPress={() => navigation.navigate('Favourites')}
        >
          <Text style={styles.sectionText}>Favourites</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.sectionButton}
          onPress={() => navigation.navigate('Messages')}
        >
          <Text style={styles.sectionText}>Chats</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.sectionButton}
          onPress={() => navigation.navigate('Bio')}
        >
          <Text style={styles.sectionText}>Bio</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingBottom: 30,
    paddingTop: 60,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  profileContainer: {
    alignItems: 'center',
  },

  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#6A4B00',
    marginBottom: 10,
  },

  name: {
    fontSize: 26,
    fontWeight: '700',
    color: '#6A4B00',
  },

  handle: {
    fontSize: 16,
    color: '#6A4B00',
    opacity: 0.7,
    marginBottom: 15,
  },

  editButton: {
    backgroundColor: '#6A4B00',
    paddingVertical: 8,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginBottom: 20,
  },

  editButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },

  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginTop: 10,
  },

  statBox: {
    alignItems: 'center',
  },

  statNumber: {
    fontSize: 20,
    fontWeight: '700',
    color: '#6A4B00',
  },

  statLabel: {
    fontSize: 14,
    color: '#6A4B00',
    opacity: 0.8,
  },

  content: {
    marginTop: 20,
    paddingHorizontal: 20,
  },

  sectionButton: {
    width: '100%',
    paddingVertical: 14,
    paddingHorizontal: 20,
    backgroundColor: '#FFF4CC',
    borderRadius: 10,
    marginBottom: 12,
  },

  sectionText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#6A4B00',
    textAlign: 'center',
  },
});

