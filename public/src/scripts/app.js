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
    MenuItem = ReactBootstrap.MenuItem,
    ButtonLink = ReactRouterBootstrap.ButtonLink,
    DropdownButton = ReactBootstrap.DropdownButton,
    ButtonToolbar = ReactBootstrap.ButtonToolbar;

// Layout view
var Layout = React.createClass({
    render: function () {
        return (
            <div className="container main-container">
                <header>


                    <ButtonToolbar className="pull-right">
                    <DropdownButton bsStyle="info" title="About" key="0">
                        <NavItemLink to="source">Source</NavItemLink>
                    </DropdownButton>
                        <DropdownButton bsStyle="warning" title="Modules" key="1">
                        <NavItemLink to="home">Home</NavItemLink>
                        <NavItemLink to="stickydiv">Sticky Div</NavItemLink>
                        <NavItemLink to="markdown">Include Markdown</NavItemLink>
                        <NavItemLink to="button">Button Example</NavItemLink>
                    </DropdownButton>
                    </ButtonToolbar>

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
        <Route name="source" handler={require('./source')} />
    </Route>
);

// Run the router
Router.run(routes, function (Handler) {
    // Render the root app view-controller
    React.render(<Handler />, $('#app-root')[0]);
});