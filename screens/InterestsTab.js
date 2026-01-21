// screens/InterestsTab.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SAMPLE_INTERESTS = [
  { id: 'news', label: 'News', icon: 'newspaper' },
  { id: 'economics', label: 'Economics', icon: 'bar-chart' },
  { id: 'politics', label: 'Politics', icon: 'hand-left' },
  { id: 'tech', label: 'Technology', icon: 'hardware-chip' },
  { id: 'anime', label: 'Anime', icon: 'planet' },
  // ...
];

export default function InterestsTab({ route, navigation }) {
  const selected = route?.params?.category;

  const renderInterest = ({ item }) => {
    const isActive = selected === item.id;
    return (
      <TouchableOpacity style={styles.interestItem} onPress={() => navigation.setParams({ category: item.id })}>
        <Ionicons name={item.icon} size={28} color={isActive ? '#6A4B00' : '#666'} />
        <Text style={[styles.interestLabel, isActive && { color: '#6A4B00' }]}>{item.label}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* Interests ribbon */}
      <View style={styles.ribbon}>
        <FlatList
          data={SAMPLE_INTERESTS}
          horizontal
          keyExtractor={(i) => i.id}
          renderItem={renderInterest}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 12 }}
        />
      </View>

      {/* Feed placeholder */}
      <View style={styles.feed}>
        <Text style={styles.feedText}>
          Showing {selected ? `'${selected}'` : 'all'} content for your interests.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fafafa' },
  ribbon: { height: 90, backgroundColor: '#fff', justifyContent: 'center' },
  interestItem: { alignItems: 'center', marginRight: 18 },
  interestLabel: { fontSize: 12, color: '#666', marginTop: 6 },
  feed: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  feedText: { color: '#333' },
});

