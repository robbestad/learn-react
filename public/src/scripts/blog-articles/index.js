import React from 'react';
import Breadcrumbs from 'react-breadcrumbs';
import {Bootstrap, Grid, Col, Row, Button} from 'react-bootstrap';

export default React.createClass({
    render() {
        return <Grid className="flyin-widget">
            <Row className="show-grid">
                <Col md={12}>
                    <Breadcrumbs />
                </Col>
            </Row>
            <Row className="show-grid">
                <Col md={12}>
                    Articles
                </Col>
            </Row>
            </Grid>
    }
});