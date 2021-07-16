import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Home from "./layout/Home";
import Player from "./layout/Player";

const hist = createBrowserHistory();

function App() {
  return (
    <React.Fragment>
      <Router history={hist}>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/player" component={Player} />
          <Redirect from="/" to="/home" />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
