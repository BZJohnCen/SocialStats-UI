import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from '../components/Login';
import Home from '../views/Home';
// import SideBar from '../components/SideBar';
import Test from '../views/Test';
import Signup from '../views/onboarding/Signup';
import TwitterOAuth from '../views/onboarding/TwitterOAuth';

const RouteList = () => (
  <Switch>
    <Route path='/login' component={Login} />
    {/*<Route path='/' component={SideBar} />*/}
    <PrivateRoute exact path='/' component={Home} />
    <Route path='/current' component={TwitterOAuth} />
    <Route path='/signup' component={Signup} />
    <Route path='/test' component={Test} />
  </Switch>
)

const isAuthenticated = () => {
  //insert our client-side auth
}

const PrivateRoute = ({ component: Component, path, otherProps }) => (
  <Route
    { ...{ path } }
    render = { (props) => (
      isAuthenticated() ? ( <Component {...props} {...otherProps} /> ) :
        ( <Redirect push to = { {pathname: '/login', state: { from: props.location }}}/>)
      )
    }
  />
);

export default RouteList;
