import { Platform } from "react-native";

// Uses fonts that ship with iOS/Android so there is zero asset/loading setup.
// Swap these for @expo-google-fonts/playfair-display + inter later if you
// want the exact brand type system — the layout/sizing already assumes it.
export const fonts = {
  display: Platform.select({ ios: "Georgia", android: "serif", default: "serif" }),
  displayItalic: Platform.select({ ios: "Georgia-Italic", android: "serif", default: "serif" }),
  body: Platform.select({ ios: "System", android: "sans-serif", default: "System" }),
  bodyMedium: Platform.select({ ios: "System", android: "sans-serif-medium", default: "System" }),
};
