'use strict';

import React from 'react';
import Breadcrumbs from 'react-breadcrumbs';
import {Grid, Col, Row} from 'react-bootstrap';


class ArticleItem extends React.Component {

    componentDidMount(){
        //console.log(this.context.router.getCurrentRoutes());
    }

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
        </Grid>;
    }
}

ArticleItem.displayName = "Item";

ArticleItem.contextTypes = {
    router: React.PropTypes.func.isRequired
};

ArticleItem.propTypes = {
    router: React.PropTypes.func.isRequired
};

export default ArticleItem;