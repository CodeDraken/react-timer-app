import React from 'react';
import { Link, IndexLink } from 'react-router';

const Navigation = (props) => {
  const page = window.location.hash.split('#/').join('');
  const title = page.length > 0 ? page.charAt(0).toUpperCase() + page.slice(1) : 'React Timer App';

  return (
    <nav className="deep-purple lighten-1">
      <div className="nav-wrapper">
        <a href={'#/' + page} className="brand-logo center">{title}</a>
        <a href="#" data-activates="nav-collapse" className="button-collapse hide-on-med-and-up">
          <i className="material-icons">menu</i>
        </a>
        <ul className="left hide-on-small-and-down">
          <li>
            <IndexLink to="/" activeClassName="active">Timer</IndexLink>
          </li>
          <li>
            <Link to="/countdown" activeClassName="active">Countdown</Link>
          </li>
        </ul>
        <ul className="side-nav" id="nav-collapse">
          <li>
            <IndexLink to="/" activeClassName="active">Timer</IndexLink>
          </li>
          <li>
            <Link to="/countdown" activeClassName="active">Countdown</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
