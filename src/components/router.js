import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./home/home";
import About from "./about/about";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={About} />
        <Route path="/work" exact component={About} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
