import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';

import Main from 'Main';

require( 'materialize-css/dist/css/materialize.min.css' );

// App css
require( 'applicationStyles' );

$( document ).ready( function () {
  $( ".button-collapse" ).sideNav();
});

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
    </Route>
  </Router>,
  document.getElementById( 'app' )
);
