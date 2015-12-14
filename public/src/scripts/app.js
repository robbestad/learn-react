/**
 * Layout and route class
 * @flow
 */
'use strict';

import Router, { Route, DefaultRoute, Redirect, IndexRoute } from 'react-router';
import React from 'react';
import { render } from 'react-dom';
import Layout from './layout';
import { createHistory } from 'history'

let history = createHistory();
import Home from './home/index';
import StickyDiv from './stickydiv/index';
import Button from './button/index';
import Markdown from './markdown/index';
import Animations from './animations/index';
import Charts from './charts/index';
import Forms from './forms/index';
import Breadcrumbs from './breadcrumbs/index';
import Source from './source/index';

const Wrapper = React.createClass({
  render(){
    return (typeof this.props.children === "undefined") ? <Home/> :
      <div>{this.props.children}</div>;
  }
});
render((
  <Router >
    <Route name="Learn React" path="/" component={Layout}>
      <IndexRoute component={Home} />
      <Route name="Home" path="/home" component={Home}/>
      <Route name="StickyDiv" path="/stickydiv" component={StickyDiv}/>
      <Route name="Markdown" path="/markdown" component={Markdown}/>
      <Route name="Source" path="/source" component={Source}/>
      <Route name="Button" path="/button" component={Button}/>
      <Route name="Animations" path="/animations" component={Animations}/>
      <Route name="Charts" path="/charts" component={Charts}/>
      <Route name="Forms" path="/forms" component={Forms}/>
      <Route name="Breadcrumbs" path="/breadcrumbs" component={Breadcrumbs}>
        <Route path="some-path" name="some-thing" component={Home} />
      </Route>
    </Route>
  </Router>
), document.getElementById('app-root'));
