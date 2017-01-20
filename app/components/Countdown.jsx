import React, { Component } from 'react';
import Clock from 'Clock';
import CountdownForm from 'CountdownForm';
import Controls from 'Controls';

class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      countdownStatus: 'stopped'
    }
  }

  componentDidUpdate (prevProps, prevState) {
    if ( this.state.countdownStatus !== prevState.countdownStatus ) {
      switch ( this.state.countdownStatus ) {
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

  startTimer = () => {
    this.timer = setInterval( () => {
      let newCount = this.state.count - 1;
      let {countdownStatus} = this.state;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });
      if (this.state.count <=0) {
        this.setState({
          countdownStatus: 'stopped'
        })
      }
    }, 1000)
  }

  handleSetCountdown = (seconds) => {
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    });
  }

  handleStatusChange = (newStatus) => {
    this.setState({
      countdownStatus: newStatus
    });
  }

  render() {
    let { count, countdownStatus } = this.state;
    let renderControlArea = () => {
      if ( countdownStatus !== 'stopped' ) {
        return (
          <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange} />
        );
      } else {
        return (
          <CountdownForm onSetCountdown={this.handleSetCountdown} />
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

export default Countdown;
