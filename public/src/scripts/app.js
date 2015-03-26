/**
 * Layout and route class
 * @flow
 */
'use strict';

import Router, { Route, DefaultRoute, Redirect } from 'react-router';
import React from 'react';
import Layout from './layout';

// Define react-router routes
var routes = (
    <Route name="/" handler={Layout}>
        <DefaultRoute handler={require('./home')} />

        <Route name="stickydiv" handler={require('./stickydiv')} />
        <Route name="static" handler={require('./static')} />
        <Route name="mixin" handler={require('./mixin')} />
        <Route name="reflux" handler={require('./reflux')} />
        <Route name="login" handler={require('./login')} />
        <Route name="markdown" handler={require('./markdown')} />
        <Route name="home" handler={require('./home')} />
        <Route name="button" handler={require('./button')} />
        <Route name="mcfly" handler={require('./mcfly')} />
        <Route name="source" handler={require('./source')} />
        <Route name="articles" handler={require('./articles')}>
            <Route name="article/:id" handler={require('./articles/item/index')} >
            </Route>
            <Route name="article/:id/edit" handler={require('./articles/item/edit')} >
            </Route>
        </Route>
        <Route name="breadcrumbs" handler={require('./breadcrumbs')} />
        <Route name="reactfire" handler={require('./reactfire')} />
        <Route name="forms" handler={require('./forms')} />
        <Route name="charts" handler={require('./charts')} />
        <Route name="animations" handler={require('./animations')} />
        <Route name="component" handler={require('./component')} />
        <Redirect from="/" to="home" />
    </Route>
);

// Run the router
Router.run(routes, function (Handler) {
    // Render the root app view-controller
    React.render(<Handler />, window.document.getElementById('app-root'));
});

