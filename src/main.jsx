import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { BrowserRouter } from "react-router-dom";
import "@mantine/notifications/styles.css";
import { Notifications } from "@mantine/notifications";
import '@mantine/carousel/styles.css';


const theme = createTheme({});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <Notifications/>
          <App />
      </BrowserRouter>
    </MantineProvider>
  </StrictMode>
);
