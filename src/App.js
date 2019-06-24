import React from "react";
import Home from "./pages/Home";
import { Route, Switch } from "react-router-dom";
import "./App.scss";


const App = () => {
  return (
    <Switch>
      {/* these are good */}
      <Route exact path="/" component={Home} />
    </Switch>
  );
};
export default App;