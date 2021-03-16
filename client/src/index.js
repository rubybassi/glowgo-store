import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { ThemeProvider } from "@material-ui/core";
import theme from "./themeProvider.js";
import { SiteContextProvider } from "./SiteContext";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <SiteContextProvider>
      <App />
    </SiteContextProvider>
  </ThemeProvider>,
  document.getElementById("root")
);
registerServiceWorker();
