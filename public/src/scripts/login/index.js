const React = require("react"),
    {Bootstrap, Grid, Col, Row, Button} = require('react-bootstrap'),
    {Link} = require('react-router'),
    {StickyRoute, ReactFireRoute, McFlyRoute, ButtonRoute, StaticsRoute, MarkdownRoute} = require('../routes'),
    Breadcrumbs = require('react-breadcrumbs'),
    McFly = require("mcfly"),
    Flux = new McFly(),
    LoginStore = require("./store");

const LoginActions = Flux.createActions({
    login: function () {
        return {
            actionType: "LOGIN"
        }
    }
});

const LoggedIn = React.createClass({
    render() {
        if (LoginStore.getLoggedIn()) {
            return <div>You are logged in!</div>
        }
        else {
            return <span />
        }
    }
});

module.exports = React.createClass({
    mixins: [LoginStore.mixin],

    storeDidChange: function () {
        this.setState({loggedIn: LoginStore.getLoggedIn()});
    },
    componentWillMount: () => {
        if (LoginStore.getLoggedIn() === false)
            LoginActions.login();
    },

    displayName: route => {
        return `Home`;
    },

    exposeToken: () => {
        this.refs.myToken.getDOMNode().innerHTML = this.getToken();
    },

    getToken: () => {
        return 'undefined' !== typeof localStorage.getItem('auth.access_token') ?
            (localStorage.getItem('auth.access_token')) : false;
    },
    render() {
        var inlineCss = {
            padding: '10px',
            lineHeight: '16px',
            color: 'red'
        };

        return <Grid className="flyin-widget">
            <Row className="show-grid">
                <Col md={12}>
                    <Breadcrumbs />

                    <LoggedIn {...this.state} />
                    <p>
                        <hr />
                        <input type="button" onClick={LoginActions.login} value="Login..."></input>
                    </p>
                    <p>
                        <hr />
                        <input type="button" onClick={this.exposeToken} value="get token...">&nbsp;
                            <span ref="myToken" />
                        </input>
                    </p>
                </Col>
            </Row>
        </Grid>
    }
});