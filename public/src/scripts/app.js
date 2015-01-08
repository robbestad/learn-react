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

// Require individual app components
var Home = require('./home/index');
var StickyDiv = require('./stickydiv/index');
var Markdown = require('./markdown/index');

// Layout view
var Layout = React.createClass({
    render: function () {
        return (
            <div className="container main-container">
                <header>
                    <Nav bsStyle="pills" className="pull-right">
                        <NavItemLink to="home">Home</NavItemLink>
                        <NavItemLink to="stickydiv">Sticky Div</NavItemLink>
                        <NavItemLink to="markdown">Markdown Include</NavItemLink>
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
        <DefaultRoute handler={Home} />
        <Route name="stickydiv" handler={StickyDiv} />
        <Route name="markdown" handler={Markdown} />
        <Route name="home" handler={Home} />
    </Route>
);

// Run the router
Router.run(routes, function (Handler) {
    // Render the root app view-controller
    React.render(<Handler />, $('#app-root')[0]);
});