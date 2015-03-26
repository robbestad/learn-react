# Basic reusable component

    var MyComponent = React.createClass({displayName: 'MyComponent',

        propTypes: {
            greeting: React.PropTypes.string.isRequired
        },

        render: function() {
            var divStyle = {
                color: 'grey',
                border: '1px solid grey',
                padding: '0.5em'
            };
            return (<div style={divStyle} class="commentBox">{this.props.greeting}, world!</div>);
        }
    });

    module.exports = React.createClass({
        displayName:"Component Example",

        render: function ():any {
            return <h1>Basic reusable react component</h1>
                   <p>Very basic react component with a mandatory 
                   property called "greeting" and inline css style.</p>
                   <MyComponent greeting="Hello"/>
        }
    });
