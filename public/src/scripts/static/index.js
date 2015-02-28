var React = require("react"),
    {Bootstrap, Grid, Col, Row, Button} = require('react-bootstrap'),
    {Link} = require('react-router');
var Markdown2Html = require("../react-markdown-to-html");
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
            return React.renderToStaticMarkup(<div dangerouslySetInnerHTML={{__html: foo.bar }}/>);
        }
    },
    render: function () {
        return <Grid className="flyin-widget">
            <Row className="show-grid">
                <Col md={12}><Breadcrumbs /></Col>
            </Row>
            <Row className="show-grid">
                <Col md={12}>Welcome to my collection of React examples, modules and tutorials. More will be coming
                    every now and then, so be sure to bookmark and come back.
                </Col>
            </Row>

            <Row className="show-grid">
                <Col md={12}>
                    <h1>{this.state.greeting}</h1>
                <div dangerouslySetInnerHTML={{__html: <Component.customRender bar="This block is rendered with renderToStaticMarkup" />}} />
                <Markdown2Html src="assets/STATICS.md" />
                </Col>

            </Row>

        </Grid>
    }
});

console.log(Component.componentName);  // My Static Component
//console.log(Component.customRender({foo:'bar'}));  // My Static Component


module.exports = Component;