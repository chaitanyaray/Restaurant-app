import React, { useEffect, useRef } from "react";
import { View, Text, Animated, Easing } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "@/navigation/types";
import { fonts } from "@/theme/fonts";

type Props = NativeStackScreenProps<RootStackParamList, "Splash">;

export default function SplashScreen({ navigation }: Props) {
  const pulse = useRef(new Animated.Value(0.6)).current;
  const fade = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fade, {
      toValue: 1,
      duration: 700,
      easing: Easing.out(Easing.quad),
      useNativeDriver: true,
    }).start();

    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(pulse, {
          toValue: 1,
          duration: 900,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
        Animated.timing(pulse, {
          toValue: 0.55,
          duration: 900,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
      ])
    );
    loop.start();

    const timer = setTimeout(() => navigation.replace("Onboarding"), 1900);
    return () => {
      loop.stop();
      clearTimeout(timer);
    };
  }, []);

  return (
    <View className="flex-1 bg-espresso items-center justify-center">
      <Animated.View style={{ opacity: fade }} className="items-center">
        <Animated.View
          style={{ opacity: pulse, transform: [{ scale: pulse }] }}
          className="w-3 h-3 rounded-full bg-ember mb-5"
        />
        <Text
          style={{ fontFamily: fonts.display }}
          className="text-husk text-5xl tracking-tight"
        >
          Husk <Text className="text-ember">&</Text> Ember
        </Text>
        <Text
          style={{ fontFamily: fonts.body }}
          className="text-smoke text-xs tracking-[4px] mt-3 uppercase"
        >
          Fire-cooked, slow-served
        </Text>
      </Animated.View>
    </View>
  );
}
