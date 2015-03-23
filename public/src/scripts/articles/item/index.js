import React from 'react';
import Breadcrumbs from 'react-breadcrumbs';
import {Bootstrap, Grid, Col, Row, Button} from 'react-bootstrap';
import Router,{Link} from 'react-router';

//export default React.createClass({
//    contextTypes:{
//        router: React.PropTypes.func.isRequired
//    },
//    componentDidMount(){
//        //console.log(this.context.router.getCurrentRoutes());
//    },
//    displayName:"My Article",
//    render() {
//
//        return <Grid className="flyin-widget">
//            <Row className="show-grid">
//                <Col md={12}>
//                    <Breadcrumbs breadcrumbName="Min første bloggartikkel" />
//                </Col>
//            </Row>
//            <Row className="show-grid">
//                <Col md={12}>
//
//                    The article
//                </Col>
//            </Row>
//        </Grid>
//    }
//});

class ArticleItem extends React.Component {
    onChange() {
        this.context.router.replaceWith('/');
    };
    componentDidMount(){
        //console.log(this.context.router.getCurrentRoutes());
    };

    render() {
        return <Grid className="flyin-widget">
            <Row className="show-grid">
                <Col md={12}>
                    <Breadcrumbs breadcrumbName="My first blogitem" />
                </Col>
            </Row>
            <Row className="show-grid">
                <Col md={12}>
                    The article
                </Col>
            </Row>
        </Grid>
    }
}

ArticleItem.contextTypes = {
    router: React.PropTypes.func.isRequired
};

export default ArticleItem;