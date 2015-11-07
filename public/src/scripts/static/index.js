"use strict";

var React = require("react"),
    {Grid, Col, Row} = require('react-bootstrap');
var Markdown2Html = require("react-markdown-to-html");
var Breadcrumbs = require('react-breadcrumbs');

var Component = React.createClass({
    displayName:"Statics Example",
    getDefaultsProps(){
      return {
          foo: "bar"
      };
    },
    getInitialState() {
        return {
            greeting: 'Hello World'
        };
    },
    statics: {
        componentName: 'My Static Component',
        customRender: function(foo) {
            return React.renderToStaticMarkup(<span>{foo}</span>);
        }
    },
    render: function () {
        return <Grid className="flyin-widget">
            <Row className="show-grid">
                <Col md={12}><Breadcrumbs {...this.props} /></Col>
            </Row>
            <Row className="show-grid">
                <Col md={12} />
            </Row>

            <Row className="show-grid">
                <Col md={12}>
                    <h1>{this.state.greeting}</h1>
                    <h2>{Component.componentName}</h2>
                     <div dangerouslySetInnerHTML={{__html: Component.customRender({foo:'This block is rendered with renderToStaticMarkup'})}} />
                    <Markdown2Html src="assets/STATICS.md" />
                </Col>
            </Row>
        </Grid>;
    }
});

//console output
//console.log(Component.componentName);  // My Static Component
//console.log(Component.customRender({foo:'This block is rendered with renderToStaticMarkup'})); x'x

module.exports = Component;