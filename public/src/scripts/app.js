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

 <Route path="articles" component={require('./articles')}>
 <Route path="article/:id" component={require('./articles/item/index')} >
 </Route>
 <Route path="article/:id/edit" component={require('./articles/item/edit')} >
 </Route>
 </Route>

 <Route name="articles" path="articles" component={require('./articles')}>
 <Route name="article" path="article/:id" component={require('./articles/item/index')} >
 <Route path="edit" component={require('./articles/item/edit')} >
 </Route>
 </Route>
 </Route>


 */
// Define react-router routes
let history = createHistory();
// history={history}

render((
  <Router>
    <Route name="Learn ReactJS" component={require('./layout')}>
      <Route name="Home" path="/" component={require('./home')}/>
        <Route name="Stickydiv" path="stickydiv" component={require('./stickydiv')}/>
        <Route name="Mixin" path="mixin" component={require('./mixin')}/>
        <Route name="Reflux" path="reflux" component={require('./reflux')}/>
        <Route name="Login" path="login" component={require('./login')}/>
        <Route name="Markdown" path="markdown" component={require('./markdown')}/>
        <Route name="Button" path="button" component={require('./button')}/>
        <Route name="McFly" path="mcfly" component={require('./mcfly')}/>
        <Route name="Source" path="source" component={require('./source')}/>
        <Route name="Breadcrumbs" path="breadcrumbs" component={require('./breadcrumbs')}/>
        <Route name="Reactfire" path="reactfire" component={require('./reactfire')}/>
        <Route name="Forms" path="forms" component={require('./forms')}/>
        <Route name="Charts" path="charts" component={require('./charts')}/>
        <Route name="Animations" path="animations" component={require('./animations')}/>
        <Route name="Component" path="component" component={require('./component')}/>
        {/*  <Redirect from="/" to="/home" />*/}
    </Route>
  </Router>
), document.getElementById('app-root'));