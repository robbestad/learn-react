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
//                    <Breadcrumbs breadcrumbName="Min første bloggartikkel" />
//                </Col>
//            </Row>
//            <Row className="show-grid">
//                <Col md={12}>
//                    {router}
//                    <Link to="/articles/article/1">Article 1</Link>
//                </Col>
//            </Row>
//        </Grid>
//    }
//};

import React from 'react';
import Breadcrumbs from 'react-breadcrumbs';
import {Bootstrap, Grid, Col, Row, Button} from 'react-bootstrap';
import Router,{Link} from 'react-router';

export default React.createClass({
    contextTypes:{
        router: React.PropTypes.func.isRequired
    },
    componentDidMount(){
        //console.log(this.context.router.getCurrentRoutes());
    },
    displayName:"My Article",
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