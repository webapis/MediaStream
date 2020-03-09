import React from 'react';
import ReactDOM from 'react-dom';
import RequestPassChange from './auth/RequestPassChange';
import AuthProvider from './auth/AuthProvider';
ReactDOM.render(
  <AuthProvider>
    {({
      handleChange,
      handleRequestPassChange,
      state
    }) => {
      return (
        <RequestPassChange
          state={state}
          handleChange={handleChange}
          handleRequestPassChange={handleRequestPassChange}
        />
      );
    }}
  </AuthProvider>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
