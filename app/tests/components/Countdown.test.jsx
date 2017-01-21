import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jquery';

import Countdown from 'Countdown';

describe('Countdown', () => {
  it('should exist', () => {
    expect(Countdown).toExist();
  });

  describe('handleSetCountdown', () => {
    it('should set state to started and countdown', (done) => {
      // render into document
      let countdown = TestUtils.renderIntoDocument(<Countdown/>);
      // call handleSetCountdown
      countdown.handleSetCountdown(10);
      // status should update and count should update
      expect(countdown.state.count).toBe(10);
      expect(countdown.state.countdownStatus).toBe('started');

      setTimeout(() => {
        expect(countdown.state.count).toBe(9);
        done();
      }, 1001);
    });
    it('should not count under 0', (done) => {
      // render into document
      let countdown = TestUtils.renderIntoDocument(<Countdown/>);
      // call handleSetCountdown
      countdown.handleSetCountdown(1);
      setTimeout(() => {
        expect(countdown.state.count).toBe(0);
        done();
      }, 3000);
    });
    it('should pause countdown on paused status', (done) => {
      let countdown = TestUtils.renderIntoDocument(<Countdown />);
      countdown.handleSetCountdown(3);
      countdown.handleStatusChange('paused');

      setTimeout( () => {
        expect(countdown.state.count).toBe(3);
        expect(countdown.state.countdownStatus).toBe('paused');
        done();
      }, 1001);
    });

    it('should stop countdown on stopped status', () => {
      let countdown = TestUtils.renderIntoDocument(<Countdown />);
      countdown.handleSetCountdown(3);
      countdown.handleStatusChange('stopped');
      expect(countdown.state.count).toBe(0);
      expect(countdown.state.countdownStatus).toBe('stopped');
    });

  });
});
