import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import Authentication from './auth/Authentication';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './nav/Navigation';
import SideBar from './nav/SideBar';
ReactDOM.render(
  <BrowserRouter>
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Authentication sidebar={<SideBar/>}>
          {({ authState }) => {
            return <Navigation />;
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
