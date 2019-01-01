import React from 'react';

export default function ChangePassword({
  state,
  handleChange,
  handleChangePass
}) {
  return (
    <div  data-testid="changepassform">
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
      <button type="button" data-testid="change-pass-btn" onClick={handleChangePass}>
        Change
      </button>
    </div>
  );
}
