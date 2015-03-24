"use strict";
import $ from 'jquery';

var React = require('react');

var marked = require('marked');
var _ = require('lodash');

module.exports = React.createClass({
    displayName: "Markdown2HTML",
    propTypes:{
      src: React.PropTypes.string.isRequired
    },
    getInitialState: function () {
        return {
            md: ''
        };
    },
    componentWillMount: function () {
        $.get(this.props.src, _.bind(function(data) {
            this.setState({md: marked(data)});
        }, this));
    },
    render: function () {
        return <div ref="md" dangerouslySetInnerHTML={{__html: this.state.md}} />;
    }
});