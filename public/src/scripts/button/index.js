'use strict';

/**
 * Click a button class
 * @flow
 */

var React = require("react"),
    {Grid, Col, Row, Button} = require('react-bootstrap');

var Markdown2Html = require("react-markdown-to-html");

var Breadcrumbs = require('react-breadcrumbs');

module.exports = React.createClass({
    displayName:"Button Example",

    getInitialState: function (): any {
        return {
            buttonText: "Not clicked",
            buttonClicked: 0,
            buttonStyle:'info'
        };
    },

    onClick: function (): any {
        this.state.buttonClicked ?
            this.setState({buttonText: "Not clicked", buttonClicked: 0, buttonStyle:'info'}) :
            this.setState({buttonText: "Clicked me", buttonClicked: 1, buttonStyle:'success'});
    },

    render: function ():any {
        return <Grid className="flyin-widget">
            <Row className="show-grid">
                <Col md={12}>
                    <Breadcrumbs {...this.props} />
                </Col>
            </Row>
            <Row className="show-grid">
                <Col md={12}>
                    <h1>Button</h1>
                    <p>Demonstrates the use of the onClick function on a button.</p>
                    <p>
                        <Button bsStyle={this.state.buttonStyle} className="button"
                            onClick={this.onClick}><span className="buttonStatus">{this.state.buttonText}</span></Button>
                    </p>
                <Markdown2Html src="./assets/CLICKBUTTON.md" />
                </Col>
            </Row>
        </Grid>
    }
});

