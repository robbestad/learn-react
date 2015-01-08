/**
 * Markdown class
 * @flow
 */

var React = require('react');

var ReactBootstrap = require('react-bootstrap'),
    Input = ReactBootstrap.Input,
    Well = ReactBootstrap.Well;

var Markdown2Html = require("react-markdown-to-html");

// Create a react view-controller
module.exports = React.createClass({
    render: function(): any {
        return (
            <div>
                <Markdown2Html src="assets/INCLUDEMD.md" />
            </div>
        );
    }
});