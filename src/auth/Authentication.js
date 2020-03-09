import React, { useState } from 'react';
import Login from './Login';
import ChangePassword from './ChangePassword';
import RequestPassChange from './RequestPassChange';
import Signup from './Signup';
import useAuth from './useAuth';
export default function Authentication() {
  const [route, setRoute] = useState('login');
  const {
    handleChange,
    handleChangePass,
    handleLogin,
    handleRequestPassChange,
    handleSignup,
    state
  } = useAuth();
  function changeRoute(route) {
    setRoute(route);
  }

  return (
    <div>
      {route === 'login' && (
        <Login
          login={handleLogin}
          onChange={handleChange}
          state={state}
          changeRoute={changeRoute}
        />
      )}
      {route === 'signup' && (
        <Signup
          signup={handleSignup}
          onChange={handleChange}
          state={state}
          changeRoute={changeRoute}
        />
      )}
      {route === 'chagepass' && (
        <ChangePassword
          changePass={handleChangePass}
          onChange={handleChange}
          state={state}
          changeRoute={changeRoute}
        />
      )}
      {route === 'requestpasschange' && (
        <RequestPassChange
          requestPassChange={handleRequestPassChange}
          onChange={handleChange}
          state={state}
          changeRoute={changeRoute}
        />
      )}
    </div>
  );
}
