import React from 'react';
import useAuth from './useAuth';
import { Route, Switch } from 'react-router-dom';
const Login = React.lazy(() => import('./Login'));
const ChangePassword = React.lazy(() => import('./ChangePassword'));
const ForgotPassword = React.lazy(() => import('./ForgotPassword'));
const Signup = React.lazy(() => import('./Signup'));
export default function Authentication({ children }) {
  const {
    handleChange,
    handleChangePass,
    handleLogin,
    handleRequestPassChange,
    handleSignup,
    state
  } = useAuth();
  return (
    <div>
      <Switch>
        <Route path="/login">
          <Login
            handleLogin={handleLogin}
            handleChange={handleChange}
            state={state}
          />
        </Route>
        <Route path="/signup">
          <Signup
            signup={handleSignup}
            handleChange={handleChange}
            state={state}
          />
        </Route>
        <Route path="/changepassword">
          <ChangePassword
            changePass={handleChangePass}
            handleChange={handleChange}
            state={state}
          />
        </Route>
        <Route path="/requestpasschange">
          <ForgotPassword
            requestPassChange={handleRequestPassChange}
            handleChange={handleChange}
            state={state}
          />
        </Route>
      </Switch>
      {children({ authState: state })}
    </div>
  );
}
