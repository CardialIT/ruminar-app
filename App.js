import React, { useEffect } from "react";
import AppNavigator from "./src/routes/AppNavigator"
import { ContextProvider } from "./src/context/AuthContext";

export default function App() {

  return (
    <ContextProvider>
    <AppNavigator />
    </ContextProvider>
  );
}
