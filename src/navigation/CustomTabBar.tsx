import React from "react";
import { View, Pressable, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { fonts } from "@/theme/fonts";

const ICONS: Record<string, { active: keyof typeof Ionicons.glyphMap; inactive: keyof typeof Ionicons.glyphMap }> = {
  Home: { active: "flame", inactive: "flame-outline" },
  Search: { active: "search", inactive: "search-outline" },
  Orders: { active: "receipt", inactive: "receipt-outline" },
  Favorites: { active: "heart", inactive: "heart-outline" },
  Profile: { active: "person", inactive: "person-outline" },
};

export default function CustomTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  return (
    <View className="absolute bottom-7 left-5 right-5">
      <View className="flex-row bg-espresso rounded-full py-3 px-2 items-center justify-between shadow-lg">
        {state.routes.map((route, i) => {
          const focused = state.index === i;
          const icons = ICONS[route.name] ?? ICONS.Home;
          const { options } = descriptors[route.key];

          const onPress = () => {
            const event = navigation.emit({ type: "tabPress", target: route.key, canPreventDefault: true });
            if (!focused && !event.defaultPrevented) navigation.navigate(route.name);
          };

          return (
            <Pressable
              key={route.key}
              onPress={onPress}
              className={`items-center justify-center rounded-full ${
                focused ? "bg-ember px-5 py-2.5 flex-row" : "px-3.5 py-2.5"
              }`}
            >
              <Ionicons
                name={focused ? icons.active : icons.inactive}
                size={20}
                color={focused ? "#FBF3E7" : "#9C8F80"}
              />
              {focused && (
                <Text
                  style={{ fontFamily: fonts.bodySemi }}
                  className="text-husk text-xs ml-1.5"
                >
                  {String(options.title ?? route.name)}
                </Text>
              )}
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
