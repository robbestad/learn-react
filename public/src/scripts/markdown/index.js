'use strict';

/**
 * Markdown class
 * @flow
 */

var React = require('react');

var Breadcrumbs = require('react-breadcrumbs');

var Markdown2Html = require("react-markdown-to-html");
const {Grid, Col, Row} = require('react-bootstrap');

// Create a react view-controller
module.exports = React.createClass({
    displayName: "Markdown",
    render() {
        return (
            <Grid className="flyin-widget">
                <Row className="show-grid">
                    <Col md={12}>
                        <Breadcrumbs {...this.props} separator=" | " />
                    </Col>
                </Row>
                <Row className="show-grid">
                    <Col md={12}>
                        <Markdown2Html src="assets/INCLUDEMD.md" />
                    </Col>
                </Row>
            </Grid>
        )
    }
});
