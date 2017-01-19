import React, { Component } from 'react';

class CountdownForm extends Component {

  onSubmit = (e) => {
    e.preventDefault();
    let strSeconds = this.refs.seconds.value;

    if ( strSeconds.match( /^[0-9]+$/ ) && strSeconds.length > 0 )  {
      this.refs.seconds.value = '';
      this.props.onSetCountdown( parseInt(strSeconds, 10) );
    }
  }

  render() {
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit} className="countdown__form">
          <input className="center-align" type="number" ref="seconds" placeholder="Enter time in seconds" />
          <button className="waves-effect waves-light btn teal accent-3 w100">Start</button>
        </form>
      </div>
    );
  }
}

export default CountdownForm;
