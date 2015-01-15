/** @jsx React.DOM */

jest.dontMock('../public/src/scripts/button/index.js');
jest.dontMock('object-assign');
jest.dontMock('../test-helpers/index.js');

describe('ClickButton', function() {
    it('changes state when user clicks a button', function() {
        var React = require('react/addons');

        var App = React.createFactory(require('../public/src/scripts/button/index.js'));
        var TestUtils = React.addons.TestUtils;
        var testHelpers = require('../test-helpers');

        var stubbed = testHelpers.makeStubbedDescriptor(App);
        var instance = TestUtils.renderIntoDocument(stubbed);
        var buttonText = TestUtils.findRenderedDOMComponentWithClass(instance, 'buttonStatus');

        var button = TestUtils.findRenderedDOMComponentWithClass(instance, 'button');

        TestUtils.Simulate.click(button);
        buttonText = TestUtils.findRenderedDOMComponentWithClass(instance, 'buttonStatus');
        expect(buttonText.getDOMNode().textContent).toBe('Clicked me');
    });
});
