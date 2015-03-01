var React = require("react"),
    {Bootstrap, Grid, Col, Row, Button} = require('react-bootstrap'),
    {Link} = require('react-router');
const {StickyRoute, ReactFireRoute, McFlyRoute, ButtonRoute} = require('../routes');
var Breadcrumbs = require('react-breadcrumbs');

var ApiStore = require("../mcfly/store");

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
                <Row className="show-grid" >
                    <Col md={12} style={{paddingBottom:20}}>Welcome to my collection of React examples, modules and tutorials. More will be coming
                        every now and then, so be sure to bookmark and come back.
                    </Col>
                </Row>

                <Row>
                    <Col xs={12} md={6} style={{paddingBottom:20}}>
                        <strong>ReactFire example</strong><br/>
                        Demonstrates the use of ReactFire, a convenience library for one-way data binding to a Firebase. Also uses standard Firebase API in order to populate the Firebase.<br/>
                        <Button bsStyle="info" className="button">
                            <Link to={ReactFireRoute.name}>ReactFire example</Link>
                        </Button>
                    </Col>
                    <Col xs={12} md={6} style={{paddingBottom:20}}>
                        <strong>McFly example</strong><br/>
                        This component uses McFly to populate a datastore with a JSON resource using AJAX.<br/>
                        The McFly store currently holds <strong>{ApiStore.getPosts().length}</strong> objects<br/>
                        <Button bsStyle="info" className="button">
                            <Link to={McFlyRoute.name}>McFly example</Link>
                        </Button>
                    </Col>


                </Row>
            <Row>
                <Col xs={12} md={6} style={{paddingBottom:20}}>
                    <strong>StickyDiv example</strong><br/>
                    This component can be wrapped around any div and will make it sticky when you scroll down.<br/>
                    <Button bsStyle="info" className="button">
                        <Link to={StickyRoute.name}>StickyDiv example</Link>
                    </Button>
                </Col>


                <Col xs={12} md={6} style={{paddingBottom:20}}>
                        <strong>Button example</strong><br/>
                        Demonstrates the use of the onClick function on a button.<br/>
                        <Button bsStyle="info" className="button">
                            <Link to={ButtonRoute.name}>OnClick example</Link>
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