import React, { Component } from 'react';
import Navigation from 'Navigation';
import Footer from 'Footer';

const Main = ( props ) => {
  return (
    <div className="app-wrapper">
      <header>
        <Navigation />
      </header>
      <main>
        <div className="row">
          <div className="col s10 offset-s1 m6 offset-m3 l4 offset-l4 center-align">
            {props.children}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

module.exports = Main;
