// react
import { StrictMode } from "react";

// react-router
import { BrowserRouter, Route, Switch } from "react-router-dom";

// styles
import "./App.scss";
import "../sass/_utils.scss";
import "../sass/_variables.scss";

// components
import AppProvider from "../context/AppProvider";
import Template from "../components/template/Template";
import Home from "../pages/home/Home";

function App() {
  return (
    <StrictMode>
      <AppProvider>
        <BrowserRouter>
          <Template>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/history">
                <div>history</div>
              </Route>
              <Route exact path="/getPoints">
                <div>get points</div>
              </Route>
              <Route path="*">
                <Home />
              </Route>
            </Switch>
          </Template>
        </BrowserRouter>
      </AppProvider>
    </StrictMode>
  );
}

export default App;
