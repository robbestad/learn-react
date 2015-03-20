import React from 'react';
import Breadcrumbs from 'react-breadcrumbs';
import {Bootstrap, Grid, Col, Row, Button} from 'react-bootstrap';
import Router,{Link, RouteHandler} from 'react-router';

export default React.createClass({
    mixins:[Router.State],
    displayName:"Articles",
    render() {
        if(this.getParams().id !== undefined){
            return <RouteHandler />
        } else {
        return <Grid className="flyin-widget">
            <Row className="show-grid">
                <Col md={12}>
                    <Breadcrumbs />
                </Col>
            </Row>
            <Row className="show-grid">
                <Col md={12}>
                    {this.getParams().id}
                    <Link to="/articles/article/1">Article #1</Link>
                </Col>
            </Row>
            </Grid>
        }
    }
});