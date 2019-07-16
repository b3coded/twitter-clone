import React from "react";
import Routes from "./routes";
import AppTheme, { light, dark } from "./styles/theme";

const mode = "light";

function App() {
  const theme = mode === "light" ? light : dark;
  return (
    <AppTheme theme={theme}>
      <Routes />
    </AppTheme>
  );
}

export default App;
