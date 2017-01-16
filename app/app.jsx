import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';

import Main from 'Main';
import Timer from 'Timer';
import Countdown from 'Countdown';

require( 'materialize-css/dist/css/materialize.min.css' );

// App css
require( 'applicationStyles' );

$( document ).ready( function () {
  $( ".button-collapse" ).sideNav();
});

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="countdown" component={Countdown} />
      <IndexRoute component={Timer} />
    </Route>
  </Router>,
  document.getElementById( 'app' )
);
