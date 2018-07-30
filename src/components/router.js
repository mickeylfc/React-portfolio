import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./home/home";
import About from "./about/about";
import Contact from "./contact/contact";
import Work from "./work/work";
import Thanks from "./contact/thanks";
import PageNotFound from "./pageNotFound"
import Provider from "../contextapi/context";

const Router = () => {
  return (
    <Provider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/about" component={About} />
          <Route exact path="/work" component={Work} />
          <Route exact path="/contact/thanks" component={Thanks} />
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default Router;
