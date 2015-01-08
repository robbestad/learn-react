/** @jsx React.DOM */

jest.dontMock('../public/src/scripts/home/index.js');
jest.dontMock('object-assign');
jest.dontMock('../test-helpers/index.js');

describe('LoadSubscriber', function() {
  it('renders home-page', function() {
    var React = require('react/addons');

    var App = React.createFactory(require('../public/src/scripts/home/index.js'));
    var TestUtils = React.addons.TestUtils;
    var testHelpers = require('../test-helpers');

    var stubbed = testHelpers.makeStubbedDescriptor(App);
    var instance = TestUtils.renderIntoDocument(stubbed);
    var title = TestUtils.findRenderedDOMComponentWithTag(instance, 'h1');
    expect(title.getDOMNode().textContent).toBe('Home');
  });
});
