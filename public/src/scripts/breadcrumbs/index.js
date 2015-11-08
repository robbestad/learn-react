'use strict';

import React from 'react';
import Crumbs from 'react-breadcrumbs';
import {Grid, Col, Row} from 'react-bootstrap';
import Markdown2Html from 'react-markdown-to-html';

const Breadcrumbs = React.createClass({
  displayName: "React-breadcrumbs",

  render () {
    return (
      <Grid className="flyin-widget">
        <Row className="show-grid">
          <Col md={12}>
            <Crumbs  {...this.props} separator=" | "/>
          </Col>
        </Row>
        <Row className="show-grid">
          <Col md={12}>
            <Markdown2Html src="assets/BREADCRUMBS.md"/>
          </Col>
        </Row>
      </Grid>
    )
  }

});
export default Breadcrumbs;