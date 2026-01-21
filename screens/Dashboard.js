// Dashboard.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // or your icon library
import FavouritesTab from './FavouritesTab';
import CommunitiesTab from './CommunitiesTab';
import ProjectsTab from './ProjectsTab';
import InterestsTab from './InterestsTab';
import ProfileTab from './ProfileTab';
import SearchScreen from './SearchScreen';

const Tab = createBottomTabNavigator();

export default function Dashboard({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerRight: () => (
          <TouchableOpacity
            style={{ marginRight: 15 }}
            onPress={() => navigation.navigate('SearchScreen')}
          >
            <Ionicons name="search" size={24} color="black" />
          </TouchableOpacity>
        ),
        tabBarIcon: ({ color, size }) => {
          let iconName;
          switch (route.name) {
            case 'Favourites':
              iconName = 'color-palette';
              break;
            case 'Communities':
              iconName = 'people';
              break;
            case 'Projects':
              iconName = 'briefcase';
              break;
            case 'Interests':
              iconName = 'heart';
              break;
            case 'Profile':
              iconName = 'person';
              break;
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      {}
      <Tab.Screen name="Interests" component={InterestsTab} />
      <Tab.Screen name="Favourites" component={FavouritesTab} />
      <Tab.Screen name="Projects" component={ProjectsTab} />
      <Tab.Screen name="Communities" component={CommunitiesTab} />
      <Tab.Screen name="Profile" component={ProfileTab} />
      </Tab.Navigator>
  );
}

// Note: Make sure SearchScreen is registered in your navigation stack somewhere


