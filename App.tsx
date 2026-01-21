import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './screens/HomeScreen.js'; 
import Register from './screens/Register.js';
import Login from './screens/Login.js';
import MainTabs from './screens/Dashboard.js';
import InterestsExplorer from './screens/InterestsExplorer.js';
import SearchScreen from './screens/SearchScreen.js';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        // ❗ drawerPosition must be INSIDE screenOptions
        screenOptions={{
          headerShown: false,
          swipeEdgeWidth: 40,
          drawerPosition: 'left',
        }}
        drawerContent={(props) => <InterestsExplorer {...props} />}
      >
        <Drawer.Screen name="Home" component={HomeScreen} />  
        <Drawer.Screen name="Main" component={MainTabs} />
        <Drawer.Screen name="Search" component={SearchScreen} />
        <Drawer.Screen name="Register" component={Register} /> // optional
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Messages" component={Messages} />
        <Drawer.Screen name="ChatRoom" component={ChatRoom} />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}


