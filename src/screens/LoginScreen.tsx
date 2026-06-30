import React, { useState } from "react";
import { View, Text, ScrollView, Pressable, KeyboardAvoidingView, Platform } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "@/navigation/types";
import { fonts } from "@/theme/fonts";
import TextField from "@/components/TextField";
import PrimaryButton from "@/components/PrimaryButton";
import { Ionicons } from "@expo/vector-icons";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

export default function LoginScreen({ navigation }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.replace("MainTabs");
    }, 800);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      className="flex-1 bg-husk"
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <View className="px-7 pt-20 pb-10">
          <View className="w-1.5 h-10 bg-ember rounded-full mb-6" />
          <Text style={{ fontFamily: fonts.display }} className="text-clay text-4xl mb-2">
            Welcome back
          </Text>
          <Text style={{ fontFamily: fonts.body }} className="text-smoke text-base mb-9">
            Sign in to pick up where your last order left off.
          </Text>

          <TextField
            label="Email"
            icon="mail-outline"
            placeholder="you@example.com"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
          <TextField
            label="Password"
            icon="lock-closed-outline"
            placeholder="••••••••"
            isPassword
            value={password}
            onChangeText={setPassword}
          />

          <Pressable
            onPress={() => navigation.navigate("ForgotPassword")}
            className="self-end mb-7"
            hitSlop={8}
          >
            <Text style={{ fontFamily: fonts.bodyMedium }} className="text-ember text-sm">
              Forgot password?
            </Text>
          </Pressable>

          <PrimaryButton label="Sign in" onPress={onSubmit} loading={loading} />

          <View className="flex-row items-center my-8">
            <View className="flex-1 h-px bg-line" />
            <Text style={{ fontFamily: fonts.body }} className="text-smoke text-xs mx-3">
              or continue with
            </Text>
            <View className="flex-1 h-px bg-line" />
          </View>

          <View className="flex-row gap-3 mb-10">
            <Pressable className="flex-1 flex-row items-center justify-center border border-line rounded-full py-3.5 active:bg-line/30">
              <Ionicons name="logo-google" size={18} color="#3A2A1E" />
              <Text style={{ fontFamily: fonts.bodyMedium }} className="text-clay text-sm ml-2">
                Google
              </Text>
            </Pressable>
            <Pressable className="flex-1 flex-row items-center justify-center border border-line rounded-full py-3.5 active:bg-line/30">
              <Ionicons name="logo-apple" size={18} color="#3A2A1E" />
              <Text style={{ fontFamily: fonts.bodyMedium }} className="text-clay text-sm ml-2">
                Apple
              </Text>
            </Pressable>
          </View>

          <View className="flex-row justify-center">
            <Text style={{ fontFamily: fonts.body }} className="text-smoke text-sm">
              New to Husk & Ember?{" "}
            </Text>
            <Pressable onPress={() => navigation.replace("Register")} hitSlop={8}>
              <Text style={{ fontFamily: fonts.bodyMedium }} className="text-ember text-sm">
                Create account
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
