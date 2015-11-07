'use strict';

const React = require("react"),
  { Grid, Col, Row} = require('react-bootstrap'),
  {Link} = require('react-router'),
  Logdown = require('../logdown/src'),
  debug = new Logdown(),
  ApiStore = require("../mcfly/store"),
  RefluxStore = require("../reflux/store"),
  LoginStore = require("../login/store"),
  {ReactFireRoute, McFlyRoute, ButtonRoute, StaticsRoute, StickyRoute,
    LoginRoute, MarkdownRoute, RefluxRoute, FormsRoute,
    ChartsRoute, AnimationsRoute, BreadcrumbsRoute, ComponentRoute} = require('../routes');

module.exports = React.createClass({
  displayName: 'Home',
  componentDidMount(){
    console.log('%cWelcome to Learn React! ', 'background: #333; color: #aaa');
    console.log('%cLearn React!', 'font-weight:bold;', 'is a collection of examples, ' +
      'modules and tutorials for Reactjs');
    console.log('Additional examples ' +
      'are being added every now and then, so be sure to ' +
      'bookmark and come again!');
    console.log('%chttp://learnreact.robbestad.com', 'background: #999;');
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
          <Link to={LoginRoute.props.path}>
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
          <Link to={ReactFireRoute.props.path}>
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
          <Link to={ButtonRoute.props.path}>
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
          <Link to={StickyRoute.props.path}>
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
          <Link to={MarkdownRoute.props.path}>
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
          <Link to={McFlyRoute.props.path}>
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
          <Link to={RefluxRoute.props.path}>
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
          <Link to={FormsRoute.props.path}>
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
          <Link to={ChartsRoute.props.path}>
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
          <Link to={AnimationsRoute.props.path}>
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
          <Link to={BreadcrumbsRoute.props.path}>
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


        <Col xs={12} md={6} className="columnBox">
          <Link to={ComponentRoute.props.path}>
            <strong>
              Basic react component example
            </strong>
          </Link>
          <br/>
          Creating a simple react component.
          <br/>
          <span className="label blue">react</span>
        </Col>

      </Row>
    </Grid>
  }
});

//    ApiStore = require("../mcfly/store"),
//    RefluxStore = require("../reflux/store"),
//    //Rx = require('rx'),
//    LoginStore = require("../login/store");
//
//    export default React.createClass({
//    displayName: 'Home',
//    componentDidMount(){
//        console.log('%cWelcome to Learn React! ', 'background: #333; color: #aaa');
//        console.log('%cLearn React!', 'font-weight:bold;', 'is a collection of examples, ' +
//        'modules and tutorials for Reactjs');console.log('Additional examples ' +
//        'are being added every now and then, so be sure to ' +
//        'bookmark and come again!');
//        console.log('%chttp://learnreact.robbestad.com','background: #999;');
//    },
