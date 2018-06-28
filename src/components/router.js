import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./home/home";
import About from "./about/about";
import Contact from "./contact/contact";
import Work from "./work/work";
import Thanks from "./contact/thanks";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/about" exact component={About} />
        <Route path="/work" exact component={Work} />
        <Route path="/thanks" exact component={Thanks} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
