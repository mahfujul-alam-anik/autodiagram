import React from "react";
import { HeroUIProvider } from "@heroui/react";

// A provider component for wrap all provider here
const GlobalProvider = ({ children }) => {
  return <HeroUIProvider>{children}</HeroUIProvider>;
};

export default GlobalProvider;
