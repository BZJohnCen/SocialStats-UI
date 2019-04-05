import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from '../components/Login';
import Home from '../views/Home';
// import SideBar from '../components/SideBar';
import Test from '../views/Test';
import Signup from '../views/onboarding/Signup';
import DashboardTest from '../views/DashboardTest'
import TwitterOAuth from '../views/onboarding/TwitterOAuth';
import LinkedinOAuth from '../views/onboarding/LinkedinOAuth';
import InstagramOAuth from '../views/onboarding/InstagramOAuth';
import FacebookOAuth from '../views/onboarding/FacebookOAuth';
import TwitterCallback from '../views/onboarding/TwitterCallback';

const RouteList = () => (
  <Switch>
    <Route path='/login' component={Login} />
    <Route path='/signup' component={Signup} />
    <Route exact path='/' component={Home} />
    <PrivateRoute path='/dashtest' component={DashboardTest} />
    <PrivateRoute path='/twitter' component={TwitterOAuth} />
    <PrivateRoute path='/test' component={Test} />
    <PrivateRoute path='/linkedin' component={LinkedinOAuth} />
    <PrivateRoute path='/instagram' component={InstagramOAuth} />
    <PrivateRoute path='/facebook' component={FacebookOAuth} />
    <PrivateRoute path='/twitter_callback' component={TwitterCallback} />
  </Switch>
)

const isAuthenticated = () => {
  //insert our client-side auth
  return localStorage.getItem("token") ? true : false;
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
