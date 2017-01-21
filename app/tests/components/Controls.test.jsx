import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jquery';

import Controls from 'Controls';

describe('Controls', () => {

  it('should exist', () => {
    expect(Controls).toExist();
  });

  describe('render', () => {

    it('should render pause button when started', () => {
      let controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started"/>);
      let $el = $(ReactDOM.findDOMNode(controls));
      let $pauseButton = $el.find('button:contains(Pause)');

      expect($pauseButton.length).toBe(1);
    });

    it('should render start button when paused', () => {
      let controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused"/>);
      let $el = $(ReactDOM.findDOMNode(controls));
      let $pauseButton = $el.find('button:contains(Start)');

      expect($pauseButton.length).toBe(1);
    });

  });

});
