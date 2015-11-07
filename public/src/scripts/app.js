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

 */
// Define react-router routes
let history = createHistory();
// history={history}
render((
  <Router>
    <Route path="/" name="Learn React" component={Layout}>
      <Route name="stickydiv" path="stickydiv" component={require('./stickydiv')} />
      <Route name="static" path="static" component={require('./static')} />
      <Route name="mixin" path="mixin" component={require('./mixin')} />
      <Route name="reflux" path="reflux" component={require('./reflux')} />
      <Route name="login" path="login" component={require('./login')} />
      <Route name="markdown" path="markdown" component={require('./markdown')} />
      <Route name="home" path="home" component={require('./home')} />
      <Route name="button" path="button" component={require('./button')} />
      <Route name="mcfly" path="mcfly" component={require('./mcfly')} />
      <Route name="source" path="source" component={require('./source')} />
      <Route name="articles" path="articles" component={require('./articles')}>
        <Route name="article" path="article/:id" component={require('./articles/item/index')} >
          <Route path="edit" component={require('./articles/item/edit')} >
          </Route>
        </Route>
      </Route>
      <Route name="breadcrumbs" path="breadcrumbs" component={require('./breadcrumbs')} />
      <Route name="reactfire" path="reactfire" component={require('./reactfire')} />
      <Route name="forms" path="forms" component={require('./forms')} />
      <Route name="charts" path="charts" component={require('./charts')} />
      <Route name="animations" path="animations" component={require('./animations')} />
      <Route name="component" path="component" component={require('./component')} />
      <Redirect from="/" to="home" />
    </Route>
  </Router>
), document.getElementById('app-root'));