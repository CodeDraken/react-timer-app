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
        <p>Main</p>
        {props.children}
      </main>
      <Footer />
    </div>
  )
}

module.exports = Main;
