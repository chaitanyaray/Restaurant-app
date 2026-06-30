import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import type { MainTabParamList } from "@/navigation/types";
import CustomTabBar from "@/navigation/CustomTabBar";

import HomeScreen from "@/screens/tabs/HomeScreen";
import SearchScreen from "@/screens/tabs/SearchScreen";
import OrdersScreen from "@/screens/tabs/OrdersScreen";
import FavoritesScreen from "@/screens/tabs/FavoritesScreen";
import ProfileScreen from "@/screens/tabs/ProfileScreen";

const Tab = createBottomTabNavigator<MainTabParamList>();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: "Home" }} />
      <Tab.Screen name="Search" component={SearchScreen} options={{ title: "Search" }} />
      <Tab.Screen name="Orders" component={OrdersScreen} options={{ title: "Orders" }} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} options={{ title: "Saved" }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: "Profile" }} />
    </Tab.Navigator>
  );
}
