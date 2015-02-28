'use strict';

var React = require('react'),
    createStoreMixin = require('./mixins/createStoreMixin'),
    UserStore = require('./stores/UserStore'),
    { PureRenderMixin } = require('react/addons'),
    { Link } = require('react-router'),
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

//<Link to='user' params={{login: user.login}}>
//    <img src={user.avatarUrl} width='72' height='72' />
//    <h3>
//            {user.login} {user.name && <span>({user.name})</span>}
//    </h3>
//</Link>