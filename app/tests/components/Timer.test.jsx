import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jquery';

import Timer from 'Timer';

describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist();
  })

  it('should start timer on start status', (done) => {
    let timer = TestUtils.renderIntoDocument(<Timer />);
    expect(timer.state.count).toBe(0);
    timer.handleStatusChange('started');

    setTimeout( () => {
      expect(timer.state.timerStatus).toBe('started');
      expect(timer.state.count).toBe(1);
      done();
    }, 1001);
  });

  it('should pause timer on pause status', (done) => {
    let timer = TestUtils.renderIntoDocument(<Timer />);
    timer.setState({count: 10});
    timer.handleStatusChange('started');
    timer.handleStatusChange('paused');
    
    setTimeout( () => {
      expect(timer.state.timerStatus).toBe('paused');
      expect(timer.state.count).toBe(10);
      done();
    }, 1001);
  });

  it('should clear timer on stopped status', (done) => {
    let timer = TestUtils.renderIntoDocument(<Timer />);
    timer.setState({count: 10});
    timer.handleStatusChange('started');
    timer.handleStatusChange('stopped');
    
    setTimeout( () => {
      expect(timer.state.timerStatus).toBe('stopped');
      expect(timer.state.count).toBe(0);
      done();
    }, 1001);
  });

});
