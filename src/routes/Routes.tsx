import React from 'react'
import { Redirect, Switch } from 'react-router'
import { Link, Route, useHistory } from 'react-router-dom';
import Layout from '../layout/Layout';

interface RouteWrapperProps {
  component: any;
  exact: boolean;
  path: string;
  isPrivateRoute: boolean;
}

const RouteWrapper = ({
  component: Component,
  isPrivateRoute,
  ...rest
}: RouteWrapperProps) => {
  return (
    <>
      <Route {...rest} render={(props) => <Component />} />
    </>
  );
}

const Routes = () => {
  return (
    <>
      <Layout>
        <Switch>
          <RouteWrapper
            exact={true}
            path="/"
            component={() => <h1>Welcome, to homepage</h1>}
            isPrivateRoute={false}
          />
          <RouteWrapper
            exact={true}
            path="/error"
            component={() => <h1>Error</h1>}
            isPrivateRoute={false}
          />
          <Redirect from="**" to="/error" />
        </Switch>
      </Layout>
    </>
  )
}

export default Routes