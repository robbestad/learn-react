const Router = require("react-router");

exports.RefluxRoute = Router.createRoute({
    name: '/reflux',
    handler: require("./reflux")
});

exports.StickyRoute = Router.createRoute({
    name: '/stickydiv',
    handler: require("./stickydiv")
});