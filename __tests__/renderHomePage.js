/** @jsx React.DOM */
jest.autoMockOff();
jest.dontMock('../public/src/scripts/home/index.js');
jest.dontMock('object-assign');
jest.dontMock('../test-helpers/index.js');

describe('LoadHome', function() {
  it('renders home-page', function() {
    const React = require('react/addons');
    const App = React.createFactory(require('../public/src/scripts/home/index.js'));
    const TestUtils = React.addons.TestUtils;
    const testHelpers = require('../test-helpers');

    const stubbed = testHelpers.makeStubbedDescriptor(App);
    const instance = TestUtils.renderIntoDocument(stubbed);
    expect(TestUtils.isCompositeComponent(instance)).toBe(true);
  });
});