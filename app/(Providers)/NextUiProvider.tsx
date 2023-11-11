import * as React from "react";
import {NextUIProvider} from "@nextui-org/react";

interface ProviderProps{
    children: React.ReactNode;
}

function App() {
  // 2. Wrap NextUIProvider at the root of your app
  return (
    <NextUIProvider>
      
    </NextUIProvider>
  );
}