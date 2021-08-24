// react
import { StrictMode } from "react";

// styles
import "./App.scss";
import "../sass/_utils.scss";
import "../sass/_variables.scss";

// components
import Home from "../pages/home/Home";
import AppProvider from "../context/AppProvider";

function App() {
  return (
    <StrictMode>
      <AppProvider>
        <Home />
      </AppProvider>
    </StrictMode>
  );
}

export default App;
