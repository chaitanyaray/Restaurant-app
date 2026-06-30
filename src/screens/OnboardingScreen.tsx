import React, { useRef, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Dimensions,
  Pressable,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "@/navigation/types";
import { fonts } from "@/theme/fonts";
import { Ionicons } from "@expo/vector-icons";

type Props = NativeStackScreenProps<RootStackParamList, "Onboarding">;

const { width } = Dimensions.get("window");

const SLIDES = [
  {
    key: "fire",
    eyebrow: "01 — The Fire",
    title: "Cooked over\nreal wood coals",
    body: "Every dish on Husk & Ember passes through an open flame before it reaches your table — that's the whole menu, not a gimmick.",
    icon: "flame" as const,
  },
  {
    key: "source",
    eyebrow: "02 — The Source",
    title: "Sourced from\nfarms you can name",
    body: "We list the farm next to the dish. If we can't tell you where it grew, it doesn't go on the grill.",
    icon: "leaf" as const,
  },
  {
    key: "table",
    eyebrow: "03 — The Table",
    title: "Order ahead,\nskip the line",
    body: "Reserve a seat or send your order straight to the kitchen — track every course from coal to plate.",
    icon: "restaurant" as const,
  },
];

export default function OnboardingScreen({ navigation }: Props) {
  const [index, setIndex] = useState(0);
  const listRef = useRef<FlatList>(null);

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const i = Math.round(e.nativeEvent.contentOffset.x / width);
    setIndex(i);
  };

  const next = () => {
    if (index < SLIDES.length - 1) {
      listRef.current?.scrollToIndex({ index: index + 1 });
    } else {
      navigation.replace("Login");
    }
  };

  return (
    <View className="flex-1 bg-husk">
      <View className="flex-row justify-end px-6 pt-16">
        <Pressable onPress={() => navigation.replace("Login")} hitSlop={10}>
          <Text style={{ fontFamily: fonts.bodyMedium }} className="text-smoke text-sm">
            Skip
          </Text>
        </Pressable>
      </View>

      <FlatList
        ref={listRef}
        data={SLIDES}
        keyExtractor={(item) => item.key}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={onScroll}
        renderItem={({ item }) => (
          <View style={{ width }} className="px-8 items-center justify-center flex-1">
            <View className="w-24 h-24 rounded-full bg-ember/10 items-center justify-center mb-10">
              <Ionicons name={item.icon} size={40} color="#D9663B" />
            </View>
            <Text
              style={{ fontFamily: fonts.bodyMedium }}
              className="text-ember text-xs tracking-[3px] uppercase mb-4"
            >
              {item.eyebrow}
            </Text>
            <Text
              style={{ fontFamily: fonts.display }}
              className="text-clay text-4xl text-center leading-[44px] mb-5"
            >
              {item.title}
            </Text>
            <Text
              style={{ fontFamily: fonts.body }}
              className="text-smoke text-base text-center leading-6 px-2"
            >
              {item.body}
            </Text>
          </View>
        )}
      />

      <View className="px-8 pb-12">
        <View className="flex-row mb-8 gap-2">
          {SLIDES.map((s, i) => (
            <View
              key={s.key}
              className={`h-1 rounded-full ${i === index ? "bg-ember flex-1" : "bg-line w-6"
                }`}
            />
          ))}
        </View>

        <Pressable
          onPress={next}
          className="bg-espresso rounded-full py-4 flex-row items-center justify-center active:opacity-80"
        >
          <Text style={{ fontFamily: fonts.bodyMedium }} className="text-husk text-base mr-2">
            {index === SLIDES.length - 1 ? "Get started" : "Next"}
          </Text>
          <Ionicons name="arrow-forward" size={18} color="#FBF3E7" />
        </Pressable>
      </View>
    </View>
  );
}
