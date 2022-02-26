import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  BottomTabBar,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ListViewBase,
} from "react-native";
import { reclaimTheme as RT } from "../const/theme";
import Home from "../screens/Home";
import ListView from "../screens/ListView";
import MapView from "../screens/MapView";
import Post from "../screens/Post";

export default Nav = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            <Image
              source={require("../assets/img/Browse.png")}
              resizeMethod="scale"
              style={{
                width: 26,
                height: 26,
                tintColor: focused ? RT.colors.secondary : RT.colors.mutedNav,
              }}
            />;
          },
        }}
        component={Home}
      />
      <Tab.Screen name="ListView" component={ListView} />
      <Tab.Screen name="MapView" component={MapView} />
      <Tab.Screen name="Post" component={Post} />
    </Tab.Navigator>
  );
};
