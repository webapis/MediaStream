import React from 'react';
export default function RequestPassChange({handleChange,state,handleRequestPassChange}) {
  return (
    <div data-testid="requestchangepassform">
      <input name="email" value={state.email} onChange={handleChange} type="email" data-testid="email" />
      <button type="button" onClick={handleRequestPassChange} data-testid="requestpasschange-btn">Request password Change</button>
    </div>
  );
}
