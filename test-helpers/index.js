var React = require('react');
function merge(obj1, obj2) {
    var merged = {};
    for (var attrname in obj1) { merged[attrname] = obj1[attrname]; }
    for (var attrname in obj2) { merged[attrname] = obj2[attrname]; }
    return merged;
}
function makeStubbedDescriptor(component, props, contextStubs) {
    var TestWrapper = React.createFactory(React.createClass({
        childContextTypes: {
            currentPath: React.PropTypes.string,
            makePath: React.PropTypes.func.isRequired,
            makeHref: React.PropTypes.func.isRequired,
            transitionTo: React.PropTypes.func.isRequired,
            replaceWith: React.PropTypes.func.isRequired,
            goBack: React.PropTypes.func.isRequired,
            isActive: React.PropTypes.func.isRequired,
            activeRoutes: React.PropTypes.array.isRequired,
            activeParams: React.PropTypes.object.isRequired,
            activeQuery: React.PropTypes.object.isRequired,
            location: React.PropTypes.object,
            routes: React.PropTypes.array.isRequired,
            namedRoutes: React.PropTypes.object.isRequired,
            scrollBehavior: React.PropTypes.object,
            routeHandlers: React.PropTypes.array.isRequired,
            getRouteAtDepth: React.PropTypes.func.isRequired,
            getRouteComponents: React.PropTypes.func.isRequired,
            getCurrentPath: React.PropTypes.func.isRequired,
            getCurrentRoutes: React.PropTypes.func.isRequired,
            getCurrentQuery: React.PropTypes.func.isRequired,
            getCurrentPathname: React.PropTypes.func.isRequired,
            getCurrentParams: React.PropTypes.func.isRequired
        },

        getChildContext: function() {
            return merge({
                currentPath: '__STUB__',
                makePath: function() {},
                makeHref: function() { return '__STUB__'; },
                transitionTo: function() {},
                replaceWith: function() {},
                goBack: function() {},
                isActive: function() {},
                activeRoutes: [],
                activeParams: {},
                activeQuery: {},
                location: {},
                routes: [],
                namedRoutes: {},
                scrollBehavior: {},
                routeHandlers: [{}],
                getRouteAtDepth: function() {},
                getCurrentQuery: function() {},
                getCurrentRoutes: function() { return {}; },
                getCurrentPath: function() { return {}; },
                getCurrentPathname: function() { return {}; },
                getRouteComponents: function() { return {}; },
                getCurrentParams: function() {}
            }, contextStubs);
        },

        render: function() {
            this.props.ref = '__subject__';
            return component(this.props);
        }
    }));

    return TestWrapper(props);
}

module.exports.makeStubbedDescriptor = makeStubbedDescriptor;
