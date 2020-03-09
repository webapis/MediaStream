import React from 'react';

export default function ChangePassword({
  state,
  handleChange,
  handleChangePass
}) {
  return (
    <div>
      <input
        value={state.password}
        type="password"
        data-testid="password"
        name="password"
        onChange={handleChange}
      />
      <input
        value={state.confirm}
        type="password"
        data-testid="confirm"
        name="confirm"
        onChange={handleChange}
      />
      <button data-testid="change" onClick={handleChangePass}>
        Change
      </button>
    </div>
  );
}
