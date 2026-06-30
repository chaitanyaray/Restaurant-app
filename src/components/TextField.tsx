import React, { useState } from "react";
import { View, Text, TextInput, TextInputProps, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { fonts } from "@/theme/fonts";

type Props = TextInputProps & {
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
  isPassword?: boolean;
  error?: string;
};

export default function TextField({ label, icon, isPassword, error, ...rest }: Props) {
  const [secure, setSecure] = useState(!!isPassword);
  const [focused, setFocused] = useState(false);

  return (
    <View className="mb-5">
      <Text style={{ fontFamily: fonts.bodyMedium }} className="text-clay text-sm mb-2">
        {label}
      </Text>
      <View
        className={`flex-row items-center bg-white rounded-2xl px-4 border ${
          error ? "border-ember_dark" : focused ? "border-ember" : "border-line"
        }`}
      >
        <Ionicons name={icon} size={18} color={focused ? "#D9663B" : "#9C8F80"} />
        <TextInput
          {...rest}
          secureTextEntry={secure}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholderTextColor="#9C8F80"
          style={{ fontFamily: fonts.body }}
          className="flex-1 py-3.5 px-3 text-clay text-base"
        />
        {isPassword && (
          <Pressable onPress={() => setSecure((s) => !s)} hitSlop={10}>
            <Ionicons name={secure ? "eye-off-outline" : "eye-outline"} size={18} color="#9C8F80" />
          </Pressable>
        )}
      </View>
      {error ? (
        <Text style={{ fontFamily: fonts.body }} className="text-ember_dark text-xs mt-1.5">
          {error}
        </Text>
      ) : null}
    </View>
  );
}
