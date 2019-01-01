import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import Authentication from './auth/Authentication';
import { BrowserRouter, Link } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Link to="/login">Login</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Authentication>
          {({ authState }) => {
            return <div>Inside Auth</div>;
          }}
        </Authentication>
      </Suspense>
    </div>
  </BrowserRouter>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
