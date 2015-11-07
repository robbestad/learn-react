'use strict';

import React from 'react';
import Breadcrumbs from 'react-breadcrumbs';
import {Grid, Col, Row} from 'react-bootstrap';
import {Link, RouteHandler} from 'react-router';

module.exports = React.createClass({
    contextTypes: {
        router: React.PropTypes.func.isRequired
    },
    displayName:"Articles",
    render() {
        var { router } = this.context;
        if(router.getCurrentParams().id !== undefined){
            return <RouteHandler />
        }

        if(router.getCurrentParams().id ===  undefined){
            return <Grid className="flyin-widget">
            <Row className="show-grid">
                <Col md={12}>
                    <Breadcrumbs {...this.props} />
                    test
                </Col>
            </Row>
            <Row className="show-grid">
                <Col md={12}>
                    {router}
                    <Link to="/articles/article/1">Article 1</Link>
                </Col>
            </Row>
        </Grid>
        }
    }
});