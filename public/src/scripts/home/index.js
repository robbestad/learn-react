var React = require("react"),
    {Bootstrap, Grid, Col, Row, Button} = require('react-bootstrap'),
    {Link} = require('react-router');
const {StickyRoute, RefluxRoute} = require('../routes');
var Breadcrumbs = require('react-breadcrumbs');
module.exports = React.createClass({
    displayName: "Home",

    render() {
        var inlineCss={
            padding:'10px',
            lineHeight:'16px',
            color:'red'
        };
        return <Grid className="flyin-widget">
                <Row className="show-grid">
                    <Col md={12}><Breadcrumbs /></Col>
                </Row>
                <Row className="show-grid">
                    <Col md={12}>Welcome to my collection of React examples, modules and tutorials. More will be coming
                        every now and then, so be sure to bookmark and come back.
                    </Col>
                </Row>

                <Row className="show-grid">
                    <Col xs={6} md={4}>
                        <strong>Reflux example</strong><br/>
                        This component uses Reflux to populate a datastore with a JSON resource using AJAX.<br/>
                        <Button bsStyle="info" className="button">
                            <Link to={RefluxRoute.name}>Reflux example</Link>
                        </Button>
                    </Col>
                    <Col xs={6} md={4}>
                        <strong>StickyDiv example</strong><br/>
                        This component can be wrapped around any div and will make it sticky when you scroll down.<br/>
                        <Button bsStyle="info" className="button">
                            <Link to={StickyRoute.name}>StickyDiv example</Link>
                        </Button>
                    </Col>

                </Row>

            </Grid>

    }
});


//<Row className="show-grid">
//    <Col xs={6} xsOffset={6}><code>&lt;{'Col xs={6} xsOffset={6}'} /&gt;</code></Col>
//</Row>
//
//<Row className="show-grid">
//    <Col md={6} mdPush={6}><code>&lt;{'Col md={6} mdPush={6}'} /&gt;</code></Col>
//    <Col md={6} mdPull={6}><code>&lt;{'Col md={6} mdPull={6}'} /&gt;</code></Col>
//</Row>