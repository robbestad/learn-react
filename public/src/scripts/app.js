/**
 * Layout and route class
 * @flow
 */

// Require libraries
var React = require('react'),
    Router = require('react-router'),
    Route = Router.Route,
    DefaultRoute = Router.DefaultRoute,
    NotFoundRoute = Router.NotFoundRoute,
    RouteHandler = Router.RouteHandler,
    Redirect = Router.Redirect,
    Link = Router.Link,

    ReactBootstrap = require('react-bootstrap'),
    Nav = ReactBootstrap.Nav,
    ReactRouterBootstrap = require('react-router-bootstrap'),
    NavItemLink = ReactRouterBootstrap.NavItemLink,
    MenuItem = ReactBootstrap.MenuItem,
    ButtonLink = ReactRouterBootstrap.ButtonLink,
    DropdownButton = ReactBootstrap.DropdownButton,
    ButtonToolbar = ReactBootstrap.ButtonToolbar;

var Layout = require("./layout");

// Define react-router routes
var routes = (
    <Route name="/" handler={Layout}>
        <DefaultRoute handler={require('./home')} />
        <Route name="stickydiv" handler={require('./stickydiv')} />
        <Route name="static" handler={require('./static')} />
        <Route name="mixin" handler={require('./mixin')} />
        <Route name="flux" handler={require('./flux')} />

        <Route name="reflux" handler={require('./reflux')} />
        <Route name="markdown" handler={require('./markdown')} />
        <Route name="home" handler={require('./home')} />
        <Route name="button" handler={require('./button')} />
        <Route name="mcfly" handler={require('./mcfly')} />
        <Route name="source" handler={require('./source')} />
        <Route name="breadcrumbs" handler={require('./breadcrumbs')} />
        <Route name="reactfire" handler={require('./reactfire')} />
        <Redirect from="/" to="home" />
    </Route>
);

// Run the router
Router.run(routes, function (Handler) {
    // Render the root app view-controller
    React.render(<Handler />, $('#app-root')[0]);
});