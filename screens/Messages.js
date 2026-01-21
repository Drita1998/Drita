import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const mockChats = [
  { id: '1', name: 'Arben Krasniqi', lastMessage: 'Let’s talk about the project.' },
  { id: '2', name: 'Drita Community', lastMessage: 'New post in Economics thread.' },
  { id: '3', name: 'Private Group', lastMessage: 'Meeting at 18:00.' },
];

export default function Messages({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={mockChats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.chatItem}
            onPress={() =>
              navigation.navigate('ChatRoom', { chatId: item.id, title: item.name })
            }
          >
            <Text style={styles.chatName}>{item.name}</Text>
            <Text style={styles.chatMessage}>{item.lastMessage}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },

  chatItem: {
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },

  chatName: {
    fontSize: 16,
    fontWeight: '700',
  },

  chatMessage: {
    fontSize: 14,
    color: '#777',
    marginTop: 4,
  },
});
