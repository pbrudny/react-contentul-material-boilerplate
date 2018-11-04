import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import PostsContainer from "./posts/PostsContainer";
import PostDetailsContainer from "./posts/PostDetailsContainer";
import About from "./pages/About";
import Album from "./layouts/album/Album";
import Checkout from "./layouts/checkout/Checkout";
import Blog from "./layouts/blog/Blog";
import Dashboard from "./layouts/Dashboard/Dashboard";
import NotFound from "./pages/NotFound";

const Routes = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/posts" component={PostsContainer} />
      <Route exact path="/post/:number" component={PostDetailsContainer} />
      <Route exact path="/about" component={About} />
      <Route exact path="/layouts/album" component={Album} />
      <Route exact path="/layouts/blog" component={Blog} />
      <Route exact path="/layouts/checkout" component={Checkout} />
      <Route exact path="/layouts/dashboard" component={Dashboard} />
      <Route exact path="/*" component={NotFound} />
    </Switch>
  </main>
);

export default Routes;
