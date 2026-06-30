import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { fonts } from "@/theme/fonts";

type Props = {
  title: string;
  subtitle: string;
  icon: keyof typeof Ionicons.glyphMap;
};

export default function PlaceholderScreen({ title, subtitle, icon }: Props) {
  return (
    <View className="flex-1 bg-husk items-center justify-center px-10">
      <View className="w-20 h-20 rounded-full bg-ember/10 items-center justify-center mb-6">
        <Ionicons name={icon} size={32} color="#D9663B" />
      </View>
      <Text style={{ fontFamily: fonts.display }} className="text-clay text-3xl mb-3 text-center">
        {title}
      </Text>
      <Text style={{ fontFamily: fonts.body }} className="text-smoke text-base text-center leading-6">
        {subtitle}
      </Text>
    </View>
  );
}
