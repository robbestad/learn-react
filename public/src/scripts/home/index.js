'use strict';

const React = require("react"),
    { Grid, Col, Row} = require('react-bootstrap'),
    {Link} = require('react-router'),
    Logdown = require('logdown'),
    debug = new Logdown({ prefix: 'Welcome' }),

    {ReactFireRoute, McFlyRoute, ButtonRoute, StaticsRoute, StickyRoute,
        LoginRoute, MarkdownRoute, RefluxRoute, FormsRoute,
        ChartsRoute, AnimationsRoute, BreadcrumbsRoute} = require('../routes'),

    ApiStore = require("../mcfly/store"),
    RefluxStore = require("../reflux/store"),
    //Rx = require('rx'),
    LoginStore = require("../login/store"),
    PureRenderMixin = require('react/addons').addons.PureRenderMixin;


    export default React.createClass({
    mixins: [PureRenderMixin],
    displayName: 'Home',
    componentDidMount(){
        debug.log('to *Learn React*');
    },
    render() {

        return <Grid className="flyin-widget">
            <Row className="show-grid" >
                <Col md={12} className="columnBox">
                    <strong>Learn React</strong>
                &nbsp; is a collection of React examples,
                    modules and tutorials. More will be coming
                    every now and then, so be sure to bookmark and come back or star/fork it
                    on
                    <a href="https://github.com/svenanders/learn-react">github</a>
                    .
                </Col>
            </Row>
            <Row className="show-grid">
                <Col md={12}>
                    <h2>Components</h2>
                </Col>
            </Row>


            <Row>
                <Col xs={12} md={6} className="columnBox">

                    <Link to={LoginRoute.name}>
                        <strong>
                            Login example
                        </strong>
                    </Link>
                    <br/>
                    Demonstrates a login component that passes credentials to a third party API and
                    authenticates with Oauth2.
                    <br/>

                    <em>Current login status: {LoginStore.isAuthenticated().toString()}</em>

                    <br/>
                    <span className="label blue">Login</span>
                &nbsp;
                    <span className="label blue">McFly</span>
                &nbsp;
                    <span className="label blue">Oauth</span>


                </Col>
                <Col xs={12} md={6} className="columnBox">
                    <Link to={ReactFireRoute.name}>
                        <strong>
                            ReactFire example
                        </strong>
                    </Link>
                    <br/>
                    Demonstrates the use of ReactFire, a convenience library for one-way data
                    binding to a Firebase. Also uses standard Firebase API in order to
                    populate the Firebase.

                    <br/>
                    <span className="label blue">Firebase</span>
                &nbsp;
                    <span className="label blue">ReactFire</span>
                &nbsp;
                    <span className="label blue">Data binding</span>

                </Col>


                <Col xs={12} md={6} className="columnBox">
                    <Link to={ButtonRoute.name}>
                        <strong>
                            Button example
                        </strong>
                    </Link>
                    <br/>
                    Demonstrates the use of the onClick function on a button.

                    <br/>
                    <span className="label blue">onClick</span>
                &nbsp;
                    <span className="label blue">Button</span>
                &nbsp;
                    <span className="label blue">Synthetic event</span>

                </Col>

                <Col xs={12} md={6} className="columnBox">
                    <Link to={StaticsRoute.name}>
                        <strong>
                            Statics example
                        </strong>
                    </Link>
                    <br/>
                    Demonstrates the use of renderToStaticMarkup.
                    <br/>
                    <span className="label blue">Statics</span>
                &nbsp;
                    <span className="label blue">renderToStaticMarkup</span>
                </Col>

                <Col xs={12} md={6} className="columnBox">
                    <Link to={StickyRoute.name}>
                        <strong>
                            StickyDiv example
                        </strong>
                    </Link>
                    <br/>
                    Demonstrates the use of StickyDiv.
                    <br/>
                    <span className="label blue">StickyDiv</span>
                </Col>

                <Col xs={12} md={6} className="columnBox">
                    <Link to={MarkdownRoute.name}>
                        <strong>
                            Markdown example
                        </strong>
                    </Link>
                    <br/>
                    React Component that converts a Markdown file to HTML. All you need to do is
                    add a Markdown file to your assets folder and reference it with this component.
                    <br/>
                    <span className="label blue">Markdown</span>
                &nbsp;
                    <span className="label blue">MD2HTML</span>
                </Col>


                <Col xs={12} md={6} className="columnBox">
                    <Link to={McFlyRoute.name}>
                        <strong>
                            McFly example
                        </strong>
                    </Link>
                    <br/>
                    This component uses McFly to populate a datastore with a JSON resource using AJAX.
                    <br/>
                    The McFly store currently holds&nbsp;
                    <strong>{ApiStore.getPosts().length}</strong>
                &nbsp;objects
                    <br/>
                    <span className="label blue">McFly</span>
                &nbsp;
                    <span className="label blue">Flux</span>
                &nbsp;
                    <span className="label blue">JSON</span>

                </Col>

                <Col xs={12} md={6} className="columnBox">
                    <Link to={RefluxRoute.name}>
                        <strong>
                            Reflux example
                        </strong>
                    </Link>
                    <br/>
                    This component uses Reflux to populate a datastore with a JSON resource using AJAX.
                    <br/>
                    The Reflux store currently holds&nbsp;
                    <strong>{RefluxStore.getPosts().length}</strong>
                &nbsp;objects
                    <br/>
                    <span className="label blue">Reflux</span>
                &nbsp;
                    <span className="label blue">Flux</span>
                &nbsp;
                    <span className="label blue">JSON</span>
                </Col>


                <Col xs={12} md={6} className="columnBox">
                    <Link to={FormsRoute.name}>
                        <strong>
                            Form validation example
                        </strong>
                    </Link>
                    <br/>
                    E-mail input validation.
                    <br/>
                    <span className="label blue">Input</span>
                    &nbsp;
                    <span className="label blue">Flux</span>
                </Col>

                <Col xs={12} md={6} className="columnBox">
                    <Link to={ChartsRoute.name}>
                        <strong>
                            Chart example
                        </strong>
                    </Link>
                    <br/>
                    Donut Chart using the D3 wrapper C3.
                    <br/>
                    <span className="label blue">C3</span>
                &nbsp;
                    <span className="label blue">D3</span>
                </Col>


                <Col xs={12} md={6} className="columnBox">
                    <Link to={AnimationsRoute.name}>
                        <strong>
                            Animations example
                        </strong>
                    </Link>
                    <br/>
                    Animations using Snabbt.Js.
                    <br/>
                    <span className="label blue">Snabbt</span>
                </Col>

                <Col xs={12} md={6} className="columnBox">
                    <Link to={BreadcrumbsRoute.name}>
                        <strong>
                            Breadcrumbs example
                        </strong>
                    </Link>
                    <br/>
                    Automatic breadcrumbs with react-breadcrumbs
                    <br/>
                    <span className="label blue">breadcrumbs</span>
                &nbsp;
                    <span className="label blue">react-router</span>
                </Col>

            </Row>
        </Grid>
    }
});