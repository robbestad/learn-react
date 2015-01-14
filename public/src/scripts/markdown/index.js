/**
 * Markdown class
 * @flow
 */

var React = require('react');

var Breadcrumbs = require('react-breadcrumbs');

var ReactBootstrap = require('react-bootstrap'),
    Input = ReactBootstrap.Input,
    Well = ReactBootstrap.Well;

var Markdown2Html = require("react-markdown-to-html");

// Create a react view-controller
module.exports = React.createClass({
    displayName:"Markdown",

    render: function(): any {
        return (
            <div>
                <Breadcrumbs />

                <Markdown2Html src="assets/INCLUDEMD.md" />
            </div>
        );
    }
});