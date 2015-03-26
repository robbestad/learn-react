'use strict';

import React from 'react';
import Breadcrumbs from 'react-breadcrumbs';
import {Grid, Col, Row} from 'react-bootstrap';
import {Link, RouteHandler} from 'react-router';


class ArticleItemEdit extends React.Component {

    componentDidMount(){
        //console.table(this.context.router.getCurrentRoutes());
        //console.table(this.context.router.getCurrentParams());
        //        <Route name="/articles/article/:id/edit" handler={require('./articles/item/edit')} />

    }

    render() {
        return <Grid className="flyin-widget">
            <Row className="show-grid">
                <Col md={12}>
                    <Breadcrumbs breadcrumbName={"Editing "+this.context.router.getCurrentParams().id} />
                </Col>
            </Row>
            <Row className="show-grid">
                <Col md={12}>
                    Editing article {this.context.router.getCurrentParams().id}
                    <br/>
                    <Link to="/articles/article/1">Back to {this.context.router.getCurrentParams().id}</Link>

                </Col>
            </Row>
        </Grid>;
    }
}


ArticleItemEdit.contextTypes = {
    router: React.PropTypes.func.isRequired
};

ArticleItemEdit.propTypes = {
    router: React.PropTypes.func
};

    export default ArticleItemEdit;