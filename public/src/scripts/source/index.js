'use strict';

var React = require("react");
var Markdown2Html = require("react-markdown-to-html");
var Breadcrumbs = require('react-breadcrumbs'),
    {Grid, Col, Row} = require('react-bootstrap');


module.exports = React.createClass({
    displayName:"Source",

    render:function():any{
       return <Grid className="flyin-widget">
               <Row className="show-grid">
                   <Col md={12}><Breadcrumbs {...this.props} /></Col>
               </Row>
               <Row className="show-grid" style={{paddingBottom:20}}>
                   <Col md={12}>
                       <Markdown2Html src="assets/README.md" />

                   </Col>
               </Row>
               <Markdown2Html src="assets/README.md" />
           </Grid>
   }
});