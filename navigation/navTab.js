import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  BottomTabBar,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ListViewBase,
  HomeStack
} from "react-native";
import { reclaimTheme as RT } from "../const/theme";
import Browse from "../screens/Browse";
import Search from "../screens/Search";
import Post from "../screens/Post";
import Settings from "../screens/Settings";

export default Nav = () => {
  const Tab = createBottomTabNavigator();
  return (
    
    <Tab.Navigator
    screenOptions={{ headerShown: false }}
    screenOptions={({ route }) => ({
     tabBarIcon: ({
        focused, color, size }) => {

            let iconName;

            if (route.name === "Browse") {
            iconName = focused
            ? 'map'
            : 'map-outline';} 
            else if (route.name === 'Search') {
            iconName = focused
            ? 'search'
            : 'search-outline';}
            else if (route.name === 'Share') {
            iconName = focused
            ? 'aperture'
            : 'aperture-outline';}
            else if (route.name === 'Settings') {
            iconName = focused
            ? 'cog'
            : 'cog-outline'
            }
            
            return <Ionicons name={iconName} size={size} color={color}     />;
            },
            })}
        
            tabBarOptions={{
            activeTintColor: RT.colors.secondary,
            inactiveTintColor: RT.colors.mutedNav,
            }}
            
           >
      <Tab.Screen name="Browse" component={Browse} options={{headerShown: false}}/>
      <Tab.Screen name="Search" component={Search} options={{headerShown: false}}/>
      <Tab.Screen name="Share" component={Post} options={{headerShown: false}}/>
      <Tab.Screen name="Settings" component={Settings} options={{headerShown: false}}/>
    </Tab.Navigator>
  );
};
