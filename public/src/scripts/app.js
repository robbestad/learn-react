/**
 * Layout and route class
 * @flow
 */
'use strict';

import Router, { Route, DefaultRoute, Redirect } from 'react-router';
import React from 'react';
import {render} from 'react-dom';
import Layout from './layout';
import { createHistory } from 'history'
/*

 <Route name="articles" component={require('./articles')}>
 <Route name="article/:id" component={require('./articles/item/index')} >
 </Route>
 <Route name="article/:id/edit" component={require('./articles/item/edit')} >
 </Route>
 </Route>

 */
// Define react-router routes
let history = createHistory();
var routes = (
<Router history={history}>
    <Route name="/" component={Layout}>
        <DefaultRoute component={require('./home')} />

        <Route name="stickydiv" component={require('./stickydiv')} />
        <Route name="static" component={require('./static')} />
        <Route name="mixin" component={require('./mixin')} />
        <Route name="reflux" component={require('./reflux')} />
        <Route name="login" component={require('./login')} />
        <Route name="markdown" component={require('./markdown')} />
        <Route name="home" component={require('./home')} />
        <Route name="button" component={require('./button')} />
        <Route name="mcfly" component={require('./mcfly')} />
        <Route name="source" component={require('./source')} />
        <Route name="articles" component={require('./articles')}>
            <Route name="article/:id" component={require('./articles/item/index')} >
                <Route name="edit" component={require('./articles/item/edit')} >
                </Route>
            </Route>
        </Route>
        <Route name="breadcrumbs" component={require('./breadcrumbs')} />
        <Route name="reactfire" component={require('./reactfire')} />
        <Route name="forms" component={require('./forms')} />
        <Route name="charts" component={require('./charts')} />
        <Route name="animations" component={require('./animations')} />
        <Route name="component" component={require('./component')} />
        <Redirect from="/" to="home" />
    </Route>
    </Router>
);
render(routes, document.getElementById('app-root');
