# Husk & Ember — Restaurant App (Expo + NativeWind + TypeScript)

A focused slice of a restaurant ordering app: Splash → Onboarding → Login/Register/Forgot
Password → 5-tab Bottom Navigation. Built as a starting point you can wire up to a real
backend and expand with menu/cart/checkout screens later.

## Brand direction
"Ember & Husk" — wood-fired, market-stall warmth. Espresso-dark surfaces, warm cream
backgrounds, a single charcoal-orange accent (`ember`) used sparingly, olive green for
secondary confirmation states. See `tailwind.config.js` for the full palette.

## Stack
- Expo SDK 51, React Native 0.74
- TypeScript (strict)
- NativeWind v2 (Tailwind classes via `className`)
- React Navigation (native-stack + bottom-tabs)
- `@expo/vector-icons` (Ionicons) — no extra icon assets needed

## Setup

```bash
npm install
npx expo start
```

Open in Expo Go (iOS/Android) or a simulator.

## Structure

```
App.tsx                          # entry point, wraps NavigationContainer
src/
  theme/fonts.ts                 # platform serif/sans font helper (no font files to load)
  components/
    TextField.tsx                # labeled input w/ icon, focus + error states, password toggle
    PrimaryButton.tsx            # loading/disabled states
    PlaceholderScreen.tsx        # shared content for tab screens
  navigation/
    types.ts                     # RootStackParamList / MainTabParamList
    RootNavigator.tsx            # Splash -> Onboarding -> Auth -> MainTabs
    BottomTabNavigator.tsx       # wires the 5 tabs to CustomTabBar
    CustomTabBar.tsx             # floating pill tab bar, ember active state
  screens/
    SplashScreen.tsx             # pulsing ember-dot signature animation
    OnboardingScreen.tsx         # 3-slide horizontal pager, custom progress dashes
    LoginScreen.tsx
    RegisterScreen.tsx
    ForgotPasswordScreen.tsx     # request -> "check your inbox" confirmation state
    tabs/
      HomeScreen.tsx
      SearchScreen.tsx
      OrdersScreen.tsx
      FavoritesScreen.tsx
      ProfileScreen.tsx
```

## Notes
- Auth screens use local component state + `setTimeout` to simulate a network call —
  swap `onSubmit` in each screen for your real auth calls.
- Fonts use Georgia (iOS) / serif (Android) for headings via `src/theme/fonts.ts` so
  there's zero font-loading setup. To use the exact brand pairing (Playfair Display +
  Inter), install `@expo-google-fonts/playfair-display` and `@expo-google-fonts/inter`,
  load them with `expo-font` in `App.tsx`, and point `fonts.ts` at the loaded family names.
- `app.json` references `./assets/icon.png`, `splash.png`, `adaptive-icon.png`, and
  `favicon.png` which aren't included — drop in your own or run
  `npx create-expo-app` defaults and copy its `assets/` folder in.
- Tab bar icons currently render flame for Home — swap per your actual nav structure.
