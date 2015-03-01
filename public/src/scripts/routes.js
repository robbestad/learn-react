const Router = require("react-router");

exports.StickyRoute = Router.createRoute({
    name: '/stickydiv',
    handler: require("./stickydiv")
});

exports.McFlyRoute = Router.createRoute({
    name: '/mcfly',
    handler: require("./mcfly")
});

exports.ReactFireRoute = Router.createRoute({
    name: '/reactfire',
    handler: require("./reactfire")
});

exports.ButtonRoute = Router.createRoute({
    name: '/button',
    handler: require("./button")
});

exports.StaticsRoute = Router.createRoute({
    name: '/static',
    handler: require("./static")
});

exports.MarkdownRoute = Router.createRoute({
    name: '/markdown',
    handler: require("./markdown")
});
