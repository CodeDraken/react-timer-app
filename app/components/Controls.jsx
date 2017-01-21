import React, { Component } from 'react';

class Controls extends Component {

  onStatusChange = (newStatus) => {
    return () => {
      this.props.onStatusChange(newStatus);
    }
  }

  render() {
    let { countdownStatus } = this.props;
    let renderStartStopButton = () => {
      if ( countdownStatus === 'started' ) {
        return (
          <button onClick={this.onStatusChange('paused')} className="waves-effect waves-light btn blue lighten-1">Pause</button>
          )
      } else if ( countdownStatus === 'paused' ) {
        return (
          <button onClick={this.onStatusChange('started')} className="waves-effect waves-light btn teal accent-3">Start</button>
        )
      }
    };

    return (
      <div className="control__form">
        {renderStartStopButton()}
        <button onClick={this.onStatusChange('stopped')} className="waves-effect waves-light btn red">Clear</button>
      </div>
    );
  }

}

export default Controls;

Controls.propTypes = {
  countdownStatus: React.PropTypes.string.isRequired,
  onStatusChange: React.PropTypes.func.isRequired
}
