import React from "react";
import { Pressable, Text, ActivityIndicator } from "react-native";
import { fonts } from "@/theme/fonts";

type Props = {
  label: string;
  onPress: () => void;
  loading?: boolean;
  disabled?: boolean;
};

export default function PrimaryButton({ label, onPress, loading, disabled }: Props) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      className={`bg-espresso rounded-full py-4 items-center justify-center ${
        disabled ? "opacity-40" : "active:opacity-80"
      }`}
    >
      {loading ? (
        <ActivityIndicator color="#FBF3E7" />
      ) : (
        <Text style={{ fontFamily: fonts.bodySemi }} className="text-husk text-base">
          {label}
        </Text>
      )}
    </Pressable>
  );
}
