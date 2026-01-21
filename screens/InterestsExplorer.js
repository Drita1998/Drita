// screens/InterestsExplorer.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// sample categories — extend as you like
const ALL_CATEGORIES = [
  { id: 'news', label: 'News', icon: 'newspaper' },
  { id: 'economics', label: 'Economics', icon: 'bar-chart' },
  { id: 'politics', label: 'Politics', icon: 'hand-left' },
  { id: 'tech', label: 'Technology', icon: 'hardware-chip' },
  { id: 'anime', label: 'Anime', icon: 'planet' },
  { id: 'books', label: 'Books', icon: 'book' },
  { id: 'music', label: 'Music', icon: 'musical-notes' },
  { id: 'art', label: 'Art', icon: 'color-palette' },
  { id: 'sports', label: 'Sports', icon: 'football' },
  // add more...
];

export default function InterestsExplorer({ navigation, ...props }) {
  const [following, setFollowing] = useState({}); // id -> true/false

  const toggleFollow = (id) => {
    setFollowing((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const renderItem = ({ item }) => {
    const isFollowing = !!following[item.id];
    return (
      <View style={styles.row}>
        <View style={styles.left}>
          <Ionicons name={item.icon} size={26} color="#6A4B00" style={{ marginRight: 12 }} />
          <TouchableOpacity onPress={() => {
            // open category page inside CommunityTab or InterestsTab: navigate and pass category
            navigation.closeDrawer();
            navigation.navigate('Main', { screen: 'Interests', params: { category: item.id } });
          }}>
            <Text style={styles.label}>{item.label}</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={[styles.followButton, isFollowing ? styles.following : styles.follow]}
          onPress={() => toggleFollow(item.id)}
        >
          <Text style={[styles.followText, isFollowing ? { color: '#6A4B00' } : { color: '#fff' }]}>
            {isFollowing ? 'Following' : 'Follow'}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Explore Interests</Text>
        <TouchableOpacity onPress={() => navigation.closeDrawer()}>
          <Ionicons name="close" size={26} color="#222" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={ALL_CATEGORIES}
        keyExtractor={(i) => i.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 40 }}
        ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: '#eee', marginHorizontal: 16 }} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  headerTitle: { fontSize: 20, fontWeight: '700', color: '#222' },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  left: { flexDirection: 'row', alignItems: 'center' },
  label: { fontSize: 18, color: '#222' },

  followButton: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
  },
  follow: { backgroundColor: '#6A4B00' },
  following: { backgroundColor: '#FFF8DC', borderWidth: 1, borderColor: '#6A4B00' },
  followText: { fontWeight: '700' },
});
