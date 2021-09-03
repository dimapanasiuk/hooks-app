import React, { useContext } from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { publicRoutes, privateRoutes } from '../router';
import { AuthContext } from '../context';

const AppRouter = () => {
  const { isAuth } = useContext(AuthContext);

  const routes = isAuth ? privateRoutes : publicRoutes;

  return (
    <Switch>
      {routes.map((route) => (
        <Route
          key={uuidv4()}
          component={route.component}
          path={route.path}
          exact={route.exact}
        />
      ))}

      <Redirect to={isAuth ? '/posts' : '/login'} />
    </Switch>
  );
};

export default AppRouter;
