// react
import { StrictMode } from "react";

// styles
import "./App.scss";
import "../sass/_utils.scss";
import "../sass/_variables.scss";

// components
import Home from "../pages/home/Home";

function App() {
  return (
    <StrictMode>
      <Home />
    </StrictMode>
  );
}

export default App;
