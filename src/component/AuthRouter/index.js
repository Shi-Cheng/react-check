import React from 'react';
import { withRouter } from 'react-router';
import { Route, Redirect } from 'react-router-dom';
import FancyRoute from '../../utils/fancy'

const AuthRouter = ({ component: Component, ...rest }) => {
  const isLogged = localStorage.getItem('isLogin') === 'login' ? true : false;
  return <FancyRoute {...rest} render={props => (isLogged ? <Component {...props} /> : <Redirect to={'/login'} />)} />;
};

export default withRouter(AuthRouter);