import React from 'react';

export default function Signup({ state, handleChange, handleSignup }) {
  return (
    <div>
      <input onChange={handleChange} value={state.username} type="text" data-testid="username" name="username" />
      <input type="email" data-testid="email" name="email" />
      <input type="password" data-testid="password" name="password" />
      <button data-testid="signup">Signup</button>
    </div>
  );
}
