import React, { useEffect } from "react";
import Routes from "./src/routes";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { ContextProvider } from "./src/context/AuthContext";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Alata-Regular": require("./assets/Alata-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ContextProvider>
      <Routes />
    </ContextProvider>
  );
}
