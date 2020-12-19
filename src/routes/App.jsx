import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../containers/Home";
import CardScreen from "../containers/CardScreen";
import Login from "../containers/Login";
import Register from "../containers/Register";
import "../assets/styles/styles.scss";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/cards" component={CardScreen} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
    </Switch>
  </BrowserRouter>
);

export default App;
