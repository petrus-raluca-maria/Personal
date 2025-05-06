import { Stack } from "expo-router";
import './globals.css'
import {StatusBar} from "react-native";

export default function RootLayout() {

  return (
      <>
      <StatusBar hidden={true}></StatusBar>
      <Stack>
    <Stack.Screen
        name="(tabs)"
        options={{headerShown: false}}
    />

    <Stack.Screen
        name="Movies/[id]"
        options={{headerShown: false}}
    />
  </Stack>;
      </>
)
}
