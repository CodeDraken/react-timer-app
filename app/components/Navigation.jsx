import React from 'react';
import { Link, IndexLink } from 'react-router';

const Navigation = () => {
  return (
    <nav className="deep-purple lighten-1">
      <div className="nav-wrapper">
        <a href="#" className="brand-logo center">React Timer</a>
        <a href="#" data-activates="nav-collapse" className="button-collapse hide-on-med-and-up">
          <i className="material-icons">menu</i>
        </a>
        <ul className="left hide-on-small-and-down">
          <li>
            <IndexLink to="/" activeClassName="active">Timer</IndexLink>
          </li>
          <li>
            <Link to="/" activeClassName="active">Countdown</Link>
          </li>
        </ul>
        <ul className="side-nav" id="nav-collapse">
          <li>
            <IndexLink to="/" activeClassName="active">Timer</IndexLink>
          </li>
          <li>
            <Link to="/" activeClassName="active">Countdown</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
