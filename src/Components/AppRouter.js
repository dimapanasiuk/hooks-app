import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';

import About from '../pages/About';
import Posts from '../pages/Posts';
import Post from '../pages/Post';

const AppRouter = () => (
  <Switch>
    <Route path="/about">
      <About />
    </Route>
    <Route exact path="/posts">
      <Posts />
    </Route>
    <Route exact path="/posts/:id">
      <Post />
    </Route>
    <Redirect to="/posts" />
  </Switch>
);

export default AppRouter;
