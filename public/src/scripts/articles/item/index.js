import React from 'react';
import Breadcrumbs from 'react-breadcrumbs';
import {Bootstrap, Grid, Col, Row, Button} from 'react-bootstrap';
import Router,{Link} from 'react-router';

export default React.createClass({
    mixins:[Router.Navigation, Router.State],
    displayName:"Article",
    render() {
        return <Grid className="flyin-widget">
            <Row className="show-grid">
                <Col md={12}>
                    <Breadcrumbs breadcrumbName="Min første bloggartikkel" />
                </Col>
            </Row>
            <Row className="show-grid">
                <Col md={12}>

                    The article
                </Col>
            </Row>
        </Grid>
    }
});
//excludes={['Articles','Learn React']}