import React from 'react';

export default function Login({ handleLogin, handleChange, state }) {
  return (
    <div data-testid="loginform">
      Login
      <input
        onChange={handleChange}
        name="email"
        value={state.email}
        type="text"
        placeholder="Enter email"
        data-testid="email"
      />
      <input
        onChange={handleChange}
        name="password"
        value={state.password}
        type="text"
        placeholder="enter password"
        data-testid="password"
      />
      <button type="button" data-testid="login-btn" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}
