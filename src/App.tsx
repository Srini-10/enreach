import React from "react";
import Router from "./router/Router.tsx";
import { NextUIProvider } from "@nextui-org/react";

function App() {
  return (
    <>
      <NextUIProvider>
        <Router />
      </NextUIProvider>
    </>
  );
}

export default App;
