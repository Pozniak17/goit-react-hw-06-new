import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./components/App";
import { theme } from "./components/helpers/Theming";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { store, persistor } from "./components/redux/store";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);
