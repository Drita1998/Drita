import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity } from 'react-native';

export default function ChatRoom({ route }) {
  const { title } = route.params;

  const [messages, setMessages] = useState([
    { id: '1', text: 'Hello!', mine: false },
    { id: '2', text: 'Hey 👋', mine: true },
  ]);

  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages([
      ...messages,
      { id: Date.now().toString(), text: input, mine: true },
    ]);
    setInput('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={[
              styles.message,
              item.mine ? styles.myMessage : styles.theirMessage,
            ]}
          >
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
      />

      <View style={styles.inputRow}>
        <TextInput
          value={input}
          onChangeText={setInput}
          placeholder="Type a message"
          style={styles.input}
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={{ color: 'white' }}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: '#fff',
  },

  title: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 10,
  },

  message: {
    padding: 10,
    borderRadius: 8,
    marginVertical: 4,
    maxWidth: '70%',
  },

  myMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#FFD700',
  },

  theirMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#eee',
  },

  messageText: {
    fontSize: 15,
  },

  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },

  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },

  sendButton: {
    marginLeft: 8,
    backgroundColor: '#6A4B00',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
  },
});
