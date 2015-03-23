'use strict';

var React = require('react'),
    { PureRenderMixin } = require('react/addons'),
    { PropTypes } = React;

module.exports = React.createClass({
    mixins: [PureRenderMixin],

    getDefaultProps() {
        return {
            user: 'svenanders'
        }
    },
    propTypes: {
        user: PropTypes.string.isRequired
    },

    render() {
        var { user } = this.props;

        return (
            <div className='User'>
                -- {user} --
            </div>
        );
    }
});