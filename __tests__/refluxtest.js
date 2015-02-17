/** @jsx React.DOM */

jest.dontMock('../public/src/scripts/reflux/index.js');
jest.dontMock('object-assign');
jest.dontMock('../test-helpers/index.js');

describe('Reflux', function() {
    it('changes something', function() {
        var React = require('react/addons');

        var App = React.createFactory(require('../public/src/scripts/reflux/index.js'));
        var TestUtils = React.addons.TestUtils;
        var testHelpers = require('../test-helpers');

        var stubbed = testHelpers.makeStubbedDescriptor(App);
        var instance = TestUtils.renderIntoDocument(stubbed);

        //var buttonText = TestUtils.findRenderedDOMComponentWithClass(instance, 'buttonStatus');
        //
        //var button = TestUtils.findRenderedDOMComponentWithClass(instance, 'button');
        //
        //TestUtils.Simulate.click(button);
        //buttonText = TestUtils.findRenderedDOMComponentWithClass(instance, 'buttonStatus');
        //expect(buttonText.getDOMNode().textContent).toBe('Clicked me');
    });
});


