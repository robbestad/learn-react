var React = require("react");
var Markdown2Html = require("react-markdown-to-html");
var Breadcrumbs = require('react-breadcrumbs');


var Component = React.createClass({
    displayName:"Statics Example",
    getDefaultsProps(){
      return {
          foo: "bar"
      }
    },
    getInitialState() {
        return {
            greeting: 'Hello World'
        }
    },
    statics: {
        componentName: 'My Static Component',
        customRender: function(foo) {
            return React.renderToStaticMarkup(<div>{foo}</div>);
        }
    },
    render: function () {
        return <div>
            <Breadcrumbs />

            <h1>{this.state.greeting}</h1>
            <Markdown2Html src="assets/STATICS.md" />
        </div>
    }
});

//console.log(Component.componentName);  // My Static Component
console.log(Component.customRender({foo:'bar'}));  // My Static Component


module.exports = Component;