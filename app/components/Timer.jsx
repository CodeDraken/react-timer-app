import React, { Component } from 'react';
import Clock from 'Clock';
import Controls from 'Controls';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      timerStatus: 'stopped'
    }
  }

  componentDidUpdate (prevProps, prevState) {
    if ( this.state.timerStatus !== prevState.timerStatus ) {
      switch ( this.state.timerStatus ) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({count: 0});
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = undefined;
  }

  startTimer = () => {
    this.timer = setInterval( () => {
      let newCount = this.state.count + 1;
      this.setState({
        count: newCount
      });
    }, 1000)
  }

  handleStartCount = (seconds) => {
    this.setState({
      timerStatus: 'started'
    });
  }

  handleStatusChange = (newStatus) => {
    this.setState({
      timerStatus: newStatus
    });
  }

  render() {
    let { count, timerStatus } = this.state;
    let renderControlArea = () => {
      if ( timerStatus !== 'stopped' ) {
        return (
          <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange} />
        );
      } else {
        return (
          <button onClick={this.handleStartCount} className="waves-effect waves-light btn teal accent-3 w100">Start</button>
        );
      }
    };

    return ( 
      <div>
        <Clock totalSeconds={count} />
        {renderControlArea()}
      </div>
     );
  }
}

export default Timer;
