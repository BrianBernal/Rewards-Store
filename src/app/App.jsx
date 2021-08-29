// react
import { StrictMode } from "react";

// react-router
import { BrowserRouter, Route, Switch } from "react-router-dom";

// styles
import "./App.scss";
import "../sass/_keyframes.scss";

// components
import AppProvider from "../context/AppProvider";
import Template from "../components/template/Template";
import Home from "../pages/home/Home";
import GetPoints from "../pages/getPoints/GetPoints";
import History from "../pages/history/History";

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
                <History />
              </Route>
              <Route exact path="/getPoints">
                <GetPoints />
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
