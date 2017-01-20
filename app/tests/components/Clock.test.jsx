import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jquery';
import Clock from 'Clock';

describe( 'Clock', () => {
  it( 'should exist', () => {
    expect( Clock ).toExist();
  });

  describe('render', () => {
    it('should render clock to output', () => {
      var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62} />);
      var $el = $( ReactDOM.findDOMNode(clock) );
      var actualText = $el.find('.clock__text').text();

      expect(actualText).toBe('01:02');
    });
  });

  describe( 'formatSeconds', () => {

    it( 'should format seconds', () => {
      var clock = TestUtils.renderIntoDocument( <Clock /> );
      var seconds = 615;
      var expected = '10:15';
      var actual = clock.formatSeconds( seconds );

      expect( actual ).toBe( expected );
    });

    it( 'should format seconds when min / sec is less than 10', () => {
      var clock = TestUtils.renderIntoDocument( <Clock /> );
      var seconds = 61;
      var expected = '01:01';
      var actual = clock.formatSeconds( seconds );

      expect( actual ).toBe( expected );
    });

  });


});
