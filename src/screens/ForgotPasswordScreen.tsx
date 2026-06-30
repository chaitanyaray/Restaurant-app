import React, { useState } from "react";
import { View, Text, Pressable, KeyboardAvoidingView, Platform } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "@/navigation/types";
import { fonts } from "@/theme/fonts";
import TextField from "@/components/TextField";
import PrimaryButton from "@/components/PrimaryButton";
import { Ionicons } from "@expo/vector-icons";

type Props = NativeStackScreenProps<RootStackParamList, "ForgotPassword">;

export default function ForgotPasswordScreen({ navigation }: Props) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const onSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 800);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      className="flex-1 bg-husk"
    >
      <View className="px-7 pt-20 flex-1">
        <Pressable onPress={() => navigation.goBack()} className="mb-8" hitSlop={10}>
          <Ionicons name="arrow-back" size={22} color="#3A2A1E" />
        </Pressable>

        {!sent ? (
          <>
            <View className="w-1.5 h-10 bg-ember rounded-full mb-6" />
            <Text style={{ fontFamily: fonts.display }} className="text-clay text-4xl mb-2">
              Reset password
            </Text>
            <Text style={{ fontFamily: fonts.body }} className="text-smoke text-base mb-9 leading-6">
              Enter the email on your account and we'll send a link to get you back in.
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

            <View className="mt-2">
              <PrimaryButton label="Send reset link" onPress={onSubmit} loading={loading} />
            </View>
          </>
        ) : (
          <View className="flex-1 items-center justify-center -mt-16">
            <View className="w-20 h-20 rounded-full bg-olive/10 items-center justify-center mb-7">
              <Ionicons name="mail-open-outline" size={32} color="#6F7A4E" />
            </View>
            <Text style={{ fontFamily: fonts.display }} className="text-clay text-3xl mb-3 text-center">
              Check your inbox
            </Text>
            <Text
              style={{ fontFamily: fonts.body }}
              className="text-smoke text-base text-center leading-6 mb-10 px-4"
            >
              We sent a reset link to {"\n"}
              <Text style={{ fontFamily: fonts.bodyMedium }} className="text-clay">
                {email || "your email"}
              </Text>
            </Text>
            <Pressable onPress={() => navigation.replace("Login")} hitSlop={8}>
              <Text style={{ fontFamily: fonts.bodySemi }} className="text-ember text-sm">
                Back to sign in
              </Text>
            </Pressable>
          </View>
        )}
      </View>
    </KeyboardAvoidingView>
  );
}
