import React, { Component } from 'react';

class Controls extends Component {

  render() {
   
    let { countdownStatus } = this.props;
    let renderStartStopButton = () => {
      if ( countdownStatus == 'started' ) {
        return (
          <button className="waves-effect waves-light btn blue lighten-1">Pause</button>
          )
      } else if ( countdownStatus == 'paused' ) {
        return (
          <button className="waves-effect waves-light btn teal accent-3">Start</button>
        )
      }
    };

    return (
      <div>
        {renderStartStopButton()}
        <button className="waves-effect waves-light btn red">Clear</button>
      </div>
    )
  }

}

export default Controls;

Controls.propTypes = {
  countdownStatus: React.PropTypes.string.isRequired
}
