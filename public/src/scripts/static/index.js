var React = require("react");
//
//var Component = React.createClass({
//    statics: {
//        // these functions are available outside the component
//        renderToBody: function() {
//            React.render(
//                <Component />,
//                document.getElementById('app')
//            );
//        }
//    },
//
//    // cannot access this function outside the component
//    getHelloWorld: function() {
//        return 'Hello World!';
//    },
//
//    render: function() {
//        return (
//            <div>{this.getHelloWorld()}</div>
//        );
//    }
//});


                var Component = React.createClass({
                    getInitialState(){
                      return{
                          greeting:'Hello World'
                      }
                    },
                    statics: {
                        componentName: 'My Static Component'
                    },
                    render: function() {
                        return <h1>{this.state.greeting}</h1>
                    }
                });

                //console.log(Component.componentName);  // My Static Component


module.exports = Component;