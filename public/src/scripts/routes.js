'use strict';
import React from 'react';
var { Router, Route } = require('react-router');

exports.StickyRoute = (<Route name="Stickydiv" path="/stickydiv" component={require("./stickydiv")}/>);
exports.McFlyRoute = (<Route name="McFly" path="/mcfly" component={require("./mcfly")}/>);
exports.ReactFireRoute = (<Route name="ReactFire" path="/reactfire" component={require("./reactfire")}/>);
exports.ButtonRoute = (<Route name="Button" path="/button" component={require("./button")}/>);
exports.MarkdownRoute = (<Route name="Markdown" path="/markdown" component={require("./markdown")}/>);
exports.LoginRoute = (<Route name="Login" path="/login" component={require("./login")}/>);
exports.RefluxRoute = (<Route name="Reflux" path="/reflux" component={require("./reflux")}/>);
exports.FormsRoute = (<Route name="Forms" path="/forms" component={require("./forms")}/>);
exports.ChartsRoute = (<Route name="Charts" path="/charts" component={require("./charts")}/>);
exports.AnimationsRoute = (<Route name="Animations" path="/animations" component={require("./animations")}/>);
exports.BreadcrumbsRoute = (<Route name="Breadcrumbs" path="/breadcrumbs" component={require("./breadcrumbs")}/>);
exports.ComponentRoute = (<Route name="Component" path="/component" component={require("./component")}/>);