import React, { Component } from 'react';

class Clock extends Component {
  formatSeconds( totalSeconds ) {
    var seconds = totalSeconds % 60;
    var minutes = Math.floor( totalSeconds / 60 );

    if (seconds < 10) {
      seconds = '0' + seconds;
    }

    if (minutes < 10) {
      minutes = '0' + minutes;
    }

    return minutes + ':' + seconds;
  }
  render() {
    let { totalSeconds } = this.props;

    return (
      <div className="clock">
        <span className="clock__text">
        {this.formatSeconds( totalSeconds )}
        </span>
      </div>
    )
  }

}

Clock.defaultProps = {
  totalSeconds: 0
}

Clock.propTypes = {
  totalSeconds: React.PropTypes.number
}

export default Clock;
