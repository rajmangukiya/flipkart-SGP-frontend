import React from 'react'
import { Redirect, Switch } from 'react-router'
import { Link, Route, useHistory } from 'react-router-dom';
import AuthStorage from '../helper/auth/AuthStorage';
import Layout from '../layout/Layout';
import HomePage from '../page/home/HomePage';
import Login from '../page/login/Login';
import ManageOrder from '../page/orders/ManageOrder';
import Orders from '../page/orders/Orders';
import ManageReturnOrder from '../page/returnOrders/ManageReturnOrder';
import ReturnOrders from '../page/returnOrders/ReturnOrders';
import Signup from '../page/signup/Signup';

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
  const history = useHistory();
  const isAuthenticated: boolean = isPrivateRoute
    ? AuthStorage.isUserAuthenticated()
    : true;

  return (
    <>
      {isAuthenticated
        ?
        <Route {...rest} render={(props) => <Component />} />
        :
        history.push("/login")
    }
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
            component={HomePage}
            isPrivateRoute={true}
          />
          <RouteWrapper
            exact={true}
            path="/login"
            component={Login}
            isPrivateRoute={false}
          />
          <RouteWrapper
            exact={true}
            path="/signup"
            component={Signup}
            isPrivateRoute={false}
          />
          <RouteWrapper
            exact={true}
            path="/orders"
            component={Orders}
            isPrivateRoute={true}
          />
          <RouteWrapper
            exact={true}
            path="/orders/:id"
            component={ManageOrder}
            isPrivateRoute={true}
          />
          <RouteWrapper
            exact={true}
            path="/return-orders"
            component={ReturnOrders}
            isPrivateRoute={true}
          />
          <RouteWrapper
            exact={true}
            path="/return-orders/:id"
            component={ManageReturnOrder}
            isPrivateRoute={true}
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