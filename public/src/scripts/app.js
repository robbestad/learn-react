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
                        <NavItemLink to="home">Home</NavItemLink>
                        <NavItemLink to="source">Source</NavItemLink>
                    </DropdownButton>
                        <DropdownButton bsStyle="warning" title="Examples" key="1">
                        <NavItemLink to="reflux">Reflux example</NavItemLink>
                        <NavItemLink to="button">Button Example</NavItemLink>
                    </DropdownButton>
                        <DropdownButton bsStyle="success" title="Modules" key="2">
                        <NavItemLink to="stickydiv">Sticky Div</NavItemLink>
                        <NavItemLink to="markdown">Include Markdown</NavItemLink>
                    </DropdownButton>
                    </ButtonToolbar>

                    <h1 className="text-muted">React Tutorial</h1>
                </header>
                <RouteHandler />
            </div>
        );
    }
});
// Define react-router routes
var routes = (
    <Route path="/" handler={Layout}>
        <DefaultRoute handler={require('./home')} />
        <Route name="stickydiv" handler={require('./stickydiv')} />
        <Route name="markdown" handler={require('./markdown')} />
        <Route name="home" handler={require('./home')} />
        <Route name="reflux" handler={require('./reflux')} />
        <Route name="button" handler={require('./button')} />
        <Route name="source" handler={require('./source')} />
    </Route>
);

// Run the router
Router.run(routes, function (Handler) {
    // Render the root app view-controller
    React.render(<Handler />, $('#app-root')[0]);
});