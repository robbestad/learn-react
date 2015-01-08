/**
 * Markdown class
 * @flow
 */

var React = require('react');

var Sticky = require('react-stickydiv');

var ReactBootstrap = require('react-bootstrap'),
    Input = ReactBootstrap.Input,
    Well = ReactBootstrap.Well;

var Markdown2Html = require("react-markdown-to-html");

// Create a react view-controller
module.exports = React.createClass({
    render: function(): any {
        return (
            <div>
                <Sticky><h2>Markdown</h2></Sticky>
                <Markdown2Html src="assets/MARKDOWN2HTML.md" />
            </div>
        );
    }
});