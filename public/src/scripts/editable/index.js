"use strict";

if ("undefined" === typeof React)
    var React = require('react');
        //escapeTextForBrowser = require('react/lib/escapeTextForBrowser');

module.exports = React.createClass({
    displayName: "Editable",

    propTypes: {
        html: React.PropTypes.string,
        editable: React.PropTypes.string,
        onChange: React.PropTypes.string

    },
    shouldComponentUpdate: function (nextProps) {
        return nextProps.editable !== this.props.editable;
    },
    componentDidUpdate: function () {
        if (this.props.html !== this.getDOMNode().innerHTML) {
            this.getDOMNode().innerHTML = this.props.html;
        }
    },
    handleChange: function (e) {
        var html = this.getDOMNode().innerHTML;
        if (this.props.onChange && html !== this.lastHtml) {
            e.target = {value: html};
            this.props.onChange(e);
        }
        this.lastHtml = html;
    },
    render: function () {
        return React.createElement('div', {
                onInput: this.handleChange,
                onBlur: this.handleChange,
                contentEditable: "undefined" === typeof this.props.editable ? true: this.props.editable,
                dangerouslySetInnerHTML: {__html: this.props.html}});
    }
});