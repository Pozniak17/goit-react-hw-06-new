import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./components/App";
import { theme } from "./components/helpers/Theming";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { store } from "./components/redux/store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
