'use strict';

//import React from 'react';
//import Breadcrumbs from 'react-breadcrumbs';
//import {Bootstrap, Grid, Col, Row, Button} from 'react-bootstrap';
//import Router,{Link, RouteHandler} from 'react-router';
//
//export default class Articles extends React.Component{
//
//    render() {
//        var { router } = this.context;
//        console.log(this.context);
//        return <Grid className="flyin-widget">
//            <Row className="show-grid">
//                <Col md={12}>
//                    <Breadcrumbs />
//                </Col>
//            </Row>
//            <Row className="show-grid">
//                <Col md={12}>
//                    {router}
//                    <Link to="/articles/article/1">Article 1</Link>
//                </Col>
//            </Row>
//            </Grid>
//        }
//};
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
        } else {
        return <Grid className="flyin-widget">
            <Row className="show-grid">
                <Col md={12}>
                    <Breadcrumbs />
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