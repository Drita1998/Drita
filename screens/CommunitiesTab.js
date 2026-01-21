import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');
const tileSize = width / 3 - 4; // 3 columns grid

export default function SearchTab() {
  const images = [
    'https://picsum.photos/500/500?random=1',
    'https://picsum.photos/500/501?random=2',
    'https://picsum.photos/500/502?random=3',
    'https://picsum.photos/500/503?random=4',
    'https://picsum.photos/500/504?random=5',
    'https://picsum.photos/500/505?random=6',
    'https://picsum.photos/500/506?random=7',
    'https://picsum.photos/500/507?random=8',
    'https://picsum.photos/500/508?random=9',
  ];

  return (
    <View style={styles.container}>
      
      {/* HEADER */}
      <LinearGradient
        colors={['#FFA500', '#FFD700']}
        style={styles.header}
      >
        <Text style={styles.headerTitle}>Search</Text>
      </LinearGradient>

      {/* SEARCH BAR */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search users, topics, media..."
          placeholderTextColor="#777"
        />
      </View>

      {/* GRID EXPLORE FEED */}
      <ScrollView contentContainerStyle={styles.gridContainer}>
        {images.map((uri, index) => (
          <Image
            key={index}
            source={{ uri }}
            style={styles.gridItem}
          />
        ))}
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },

  header: {
    paddingTop: 50,
    paddingBottom: 18,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#fff',
  },

  searchContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  searchInput: {
    backgroundColor: '#eee',
    padding: 12,
    borderRadius: 10,
    fontSize: 15,
  },

  gridContainer: {
    padding: 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  gridItem: {
    width: tileSize,
    height: tileSize,
    margin: 2,
    borderRadius: 6,
  },
});

