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
        {props.children}
      </main>
      <Footer />
    </div>
  )
}

module.exports = Main;
