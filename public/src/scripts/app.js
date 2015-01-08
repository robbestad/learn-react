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
    Link = Router.Link,

    ReactBootstrap = require('react-bootstrap'),
    Nav = ReactBootstrap.Nav,
    ReactRouterBootstrap = require('react-router-bootstrap'),
    NavItemLink = ReactRouterBootstrap.NavItemLink,
    ButtonLink = ReactRouterBootstrap.ButtonLink;

// Layout view
var Layout = React.createClass({
    render: function () {
        return (
            <div className="container main-container">
                <header>
                    <Nav bsStyle="pills" className="pull-right">
                        <NavItemLink to="home">Home</NavItemLink>
                        <NavItemLink to="stickydiv">StickyDiv</NavItemLink>
                        <NavItemLink to="markdown">IncludeMD</NavItemLink>
                        <NavItemLink to="button">Button</NavItemLink>
                    </Nav>
                    <h1 className="text-muted">React Reflux Boilerplate</h1>
                </header>
                <RouteHandler />
            </div>
        );
    }
});
// Define react-router routes
var routes = (
    <Route path="/" handler={Layout}>
        <DefaultRoute handler={require('./home/index')} />
        <Route name="stickydiv" handler={require('./stickydiv/index')} />
        <Route name="markdown" handler={require('./markdown/index')} />
        <Route name="home" handler={require('./home/index')} />
        <Route name="button" handler={require('./button')} />
    </Route>
);

// Run the router
Router.run(routes, function (Handler) {
    // Render the root app view-controller
    React.render(<Handler />, $('#app-root')[0]);
});