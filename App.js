import React, { useEffect } from "react";
import AppNavigator from "./src/routes/AppNavigator"
import { ContextProvider } from "./src/context/AuthContext";
import Toast from "react-native-toast-message";

export default function App() {

  return (
    <ContextProvider>
    <AppNavigator />
    <Toast />
    </ContextProvider>
  );
}
