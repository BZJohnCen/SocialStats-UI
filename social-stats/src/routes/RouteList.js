import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from '../components/Login';
import Home from '../views/Home';
// import SideBar from '../components/SideBar';
import Test from '../views/Test';
import Signup from '../views/onboarding/Signup';
import DashboardTest from '../views/DashboardTest'

const RouteList = () => (
  <Switch>
    <Route path='/login' component={Login} />
    {/*<Route path='/' component={SideBar} />*/}
    <PrivateRoute exact path='/' component={Home} />
    <Route path='/test' component={Signup} />
    <Route path='/dashtest' component={DashboardTest} />
  </Switch>
)

const isAuthenticated = () => {
  //insert our client-side auth
}

const PrivateRoute = ({ component: Component, path, otherProps }) => (
  <Route
    {...{ path }}
    render={(props) => (
      isAuthenticated() ? (<Component {...props} {...otherProps} />) :
        (<Redirect push to={{ pathname: '/login', state: { from: props.location } }} />)
    )
    }
  />
);

export default RouteList;
