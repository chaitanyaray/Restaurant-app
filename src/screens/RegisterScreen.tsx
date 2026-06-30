import React, { useState } from "react";
import { View, Text, ScrollView, Pressable, KeyboardAvoidingView, Platform } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "@/navigation/types";
import { fonts } from "@/theme/fonts";
import TextField from "@/components/TextField";
import PrimaryButton from "@/components/PrimaryButton";
import { Ionicons } from "@expo/vector-icons";

type Props = NativeStackScreenProps<RootStackParamList, "Register">;

export default function RegisterScreen({ navigation }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreed, setAgreed] = useState(false);
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
          <Pressable onPress={() => navigation.goBack()} className="mb-8" hitSlop={10}>
            <Ionicons name="arrow-back" size={22} color="#3A2A1E" />
          </Pressable>

          <View className="w-1.5 h-10 bg-ember rounded-full mb-6" />
          <Text style={{ fontFamily: fonts.display }} className="text-clay text-4xl mb-2">
            Create account
          </Text>
          <Text style={{ fontFamily: fonts.body }} className="text-smoke text-base mb-9">
            A few details and your table's basically set.
          </Text>

          <TextField
            label="Full name"
            icon="person-outline"
            placeholder="Alex Rivera"
            value={name}
            onChangeText={setName}
          />
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
            placeholder="At least 8 characters"
            isPassword
            value={password}
            onChangeText={setPassword}
          />

          <Pressable
            onPress={() => setAgreed((a) => !a)}
            className="flex-row items-center mb-8 mt-1"
            hitSlop={6}
          >
            <View
              className={`w-5 h-5 rounded-md items-center justify-center border mr-3 ${
                agreed ? "bg-ember border-ember" : "border-line"
              }`}
            >
              {agreed && <Ionicons name="checkmark" size={14} color="#FBF3E7" />}
            </View>
            <Text style={{ fontFamily: fonts.body }} className="text-smoke text-sm flex-1">
              I agree to the Terms of Service and Privacy Policy
            </Text>
          </Pressable>

          <PrimaryButton
            label="Create account"
            onPress={onSubmit}
            loading={loading}
            disabled={!agreed}
          />

          <View className="flex-row justify-center mt-8">
            <Text style={{ fontFamily: fonts.body }} className="text-smoke text-sm">
              Already have an account?{" "}
            </Text>
            <Pressable onPress={() => navigation.replace("Login")} hitSlop={8}>
              <Text style={{ fontFamily: fonts.bodySemi }} className="text-ember text-sm">
                Sign in
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
