import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';

const Routes = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/posts' component={PostsContainer} />
      <Route exact path='/post/:number' component={PostDetailsContainer} />
      <Route exact path='/about' component={About} />
      <Route exact path='/*' component={NotFound} />
    </Switch>
  </main>
);

export default Routes;
