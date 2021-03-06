import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { LoginPage } from './LoginPage';
import { HomePage } from './Mainpage_Quiet';
import { SignupPage } from './SignupPage';

export const Router = () => {
  return (
    <Switch>
      <Route path="/signup" component={SignupPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/" component={HomePage}  />
      <Route path="/">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
};
