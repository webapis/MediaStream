import React from 'react';
export default function RequestPassChange({handleChange,state,handleRequestPassChange}) {
  return (
    <div>
      <input name="email" value={state.email} onChange={handleChange} type="email" data-testid="email" />
      <button onClick={handleRequestPassChange} data-testid="request">Request password Change</button>
    </div>
  );
}
