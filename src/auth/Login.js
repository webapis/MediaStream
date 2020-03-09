import React, { useEffect } from 'react';

export default function Login({ handleLogin, handleChange, state }) {
  useEffect(() => {
    if (state.email === null) {
      debugger;
    }
  }, [state]);

  return (
    <div>
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
      <button data-testid="login" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}
