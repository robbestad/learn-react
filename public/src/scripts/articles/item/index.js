'use strict';

import React from 'react';
import Breadcrumbs from 'react-breadcrumbs';
import {Grid, Col, Row} from 'react-bootstrap';
import {Link, RouteHandler} from 'react-router';


class ArticleItem extends React.Component {

    componentDidMount(){
        //console.table(this.context.router.getCurrentRoutes());
        //console.table(this.context.router.getCurrentParams());
    }

    render() {
        return <Grid className="flyin-widget">
            <Row className="show-grid">
                <Col md={12}>
                    <Breadcrumbs breadcrumbName={"Article "+this.context.router.getCurrentParams().id} />
                </Col>
            </Row>
            <Row className="show-grid">
                <Col md={12}>
                    Viewing article {this.context.router.getCurrentParams().id}
                    <br/>
                    <Link to="/articles/article/1/edit">Edit {this.context.router.getCurrentParams().id}</Link>

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
    router: React.PropTypes.func
};

export default ArticleItem;