import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createTheme, Theme, ThemeProvider } from "@mui/material";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
// Setting default theme to MuchBetter palette
const theme: Theme = createTheme({
  palette: {
    primary: {
      main: "#009e73",
      light: "#52d0a2",
      dark: "#006e47",
    },
    secondary: {
      main: "#606060",
      light: "#8d8d8d",
      dark: "#363636",
    },
  },
});
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
