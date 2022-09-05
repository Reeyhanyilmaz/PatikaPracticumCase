import "./App.css";
import Header from "./components/Header";
import Todos from "./components/Todos";
import { ChakraProvider } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { DarkModeToggle } from "@anatoliygatt/dark-mode-toggle";
import { clsx } from "clsx";

function App() {
  const [mode, setMode] = useState(localStorage.getItem("mode"));

  useEffect(() => {
    localStorage.setItem("mode", mode);
  }, [mode]);

  return (
    <div
      className={clsx("App", {
        dark: mode === "dark",
      })}
    >
      <div className="container">
        <div className="toggle">
          <DarkModeToggle
            mode={mode}
            dark="Dark"
            light="Light"
            size="sm"
            inactiveTrackColor="#e2e8f0"
            inactiveTrackColorOnHover="#f8fafc"
            inactiveTrackColorOnActive="#cbd5e1"
            activeTrackColor="#334155"
            activeTrackColorOnHover="#1e293b"
            activeTrackColorOnActive="#0f172a"
            inactiveThumbColor="#1e293b"
            activeThumbColor="#e2e8f0"
            onChange={(mode) => {
              setMode(mode);
            }}
          />
        </div>
        <ChakraProvider>
          <Header />
          <Todos />
        </ChakraProvider>
      </div>
    </div>
  );
}

export default App;
