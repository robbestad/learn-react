'use strict';

const React = require("react"),
  { Grid, Col, Row} = require('react-bootstrap'),
  {Link} = require('react-router'),
  Logdown = require('../logdown/src'),
  debug = new Logdown(),
  ApiStore = require("../mcfly/store"),
  RefluxStore = require("../reflux/store"),
  LoginStore = require("../login/store");

module.exports = React.createClass({
  displayName: 'Home',
  componentDidMount(){
    console.log('%cWelcome to Learn React! ', 'background: #333; color: #aaa');
    console.log('%cLearn React!', 'font-weight:bold;', 'is a collection of examples, ' +
      'modules and tutorials for Reactjs');
  },

  render() {

    return <Grid className="flyin-widget">
      {this.props.children}
      <Row className="show-grid" >
        <Col md={12} className="columnBox">
          <strong>Learn React</strong>
          &nbsp; is a collection of React examples,
          modules and tutorials. More will be coming
          every now and then, so be sure to bookmark and come back or star/fork it
          on{" "}

          <a href="https://github.com/svenanders/learn-react">github</a>.
          {/*Test: <Link to="breadcrumbs/some-path">test</Link>*/}
        </Col>
      </Row>
      <Row className="show-grid">
        <Col md={12}>
          <h2>Components</h2>
        </Col>
      </Row>


      <Row>



        <Col xs={12} md={6} className="columnBox">
          <Link to="/button">
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
          <Link to="/stickydiv">
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
          <Link to="/markdown">
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
          <Link to="/forms">
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
          <Link to="/charts">
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
          <Link to="/animations">
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
          <Link to="/breadcrumbs">
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
