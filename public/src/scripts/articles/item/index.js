'use strict';

import React from 'react';
import Breadcrumbs from 'react-breadcrumbs';
import {Grid, Col, Row} from 'react-bootstrap';
import {Link, RouteHandler} from 'react-router';

//class Base1 {
//    constructor(a) {
//        this.a = a;
//    }
//}
//let b1 = new Base1(1);

//console.log(b1);-

class ArticleItem extends React.Component {
    constructor(props, context) {
        super(props);
        console.log("%c current path from constructor", 'color:red');
        console.log(context.router.getCurrentPathname()) //=> undefined
    }
    componentDidMount(){
        console.log(this.context.router.getCurrentPathname().split("/")[this.context.router.getCurrentPathname().split("/").length-1]);
    }
    getCurrentPathFragment(){
        return this.context.router.getCurrentPathname().split("/")[this.context.router.getCurrentPathname().split("/").length-1];
    }
    render() {
        if(this.getCurrentPathFragment()==='edit'){
            return <RouteHandler />;
        }
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
                    <Link to={"/articles/article/"+this.context.router.getCurrentParams().id+"/edit"}>Edit {this.context.router.getCurrentParams().id}</Link>

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