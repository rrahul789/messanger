import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme.js";
import { FriendContextProvider } from "./context/FriendContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <FriendContextProvider>
        <App />
      </FriendContextProvider>
    </ThemeProvider>
  </StrictMode>
);
