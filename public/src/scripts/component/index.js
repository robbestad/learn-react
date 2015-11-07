'use strict';

/**
 * Basic reusable component
 * @flow
 */

var React = require("react"),
    {Grid, Col, Row, Button} = require('react-bootstrap');

var Markdown2Html = require("react-markdown-to-html");

var Breadcrumbs = require('react-breadcrumbs');

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
        return (<div style={divStyle} className="commentBox">{this.props.greeting}, world!</div>);
    }
});

module.exports = React.createClass({
    displayName:"Component Example",

    render: function ():any {
        return <Grid className="flyin-widget">
            <Row className="show-grid">
                <Col md={12}>
                    <Breadcrumbs {...this.props} />
                </Col>
            </Row>
            <Row className="show-grid">
                <Col md={12}>
                    <h1>Basic reusable react component</h1>
                    <p>Very basic react component with a mandatory
                        property called "greeting" and inline css style.</p>
                    <MyComponent greeting="Hello"/>
                <Markdown2Html src="./assets/COMPONENT.md" />
                </Col>
            </Row>
        </Grid>
    }
});

