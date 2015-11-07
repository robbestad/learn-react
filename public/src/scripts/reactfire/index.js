'use strict';

let React = require('react'),
  Breadcrumbs = require('react-breadcrumbs'),
  Markdown2Html = require("react-markdown-to-html"),
  Firebase = require('firebase'),
  ReactFireMixin = require('reactfire'),
  {findDOMNode} = require('react-dom'),
  {Grid, Col, Row, Button} = require('react-bootstrap');

let ReactfireDemo = React.createClass({

  displayName: 'Firebase and Reactfire Example',

  propTypes: {
    baseUrl: React.PropTypes.string,
    strings: React.PropTypes.string
  },

  mixins: [ReactFireMixin],

  getDefaultProps() {
    //some default props
    return {
      baseUrl: 'https://reactfire-demo.firebaseio.com/',
      strings: 'strings'
    };
  },

  getInitialState() {
    //set the initial state attributes
    return {
      config: {
        buttonStyle: 'info',
        buttonText: 'add',
        buttonTextReset: 'reset database',
        appname: 'Firebase and Reactfire Example',
        text1: 'Demonstrates the use of ReactFire, a convenience library for one-way data binding to a ' +
        'Firebase. Also uses standard Firebase API in order to populate the Firebase.',
        text2: 'Add some text to the Firebase, and watch as it is immediately displayed below.',
        text3: 'The database will be reset daily, but if you find the contents offensive you can reset it yourself by using the reset database button.'
      },
      strings: []
    };
  },

  componentWillMount() {
    //create the Firebase refs & set the state strings array
    let stringsRef = new Firebase(this.props.baseUrl + this.props.strings);
    this.bindAsArray(stringsRef, 'strings');
  },

  componentDidMount() {
    findDOMNode(this.refs.theInput).focus();
  },

  addInputString() {
    //called on click of add-button,
    // gets the text from the input field,
    // pushes it to the Firebase
    // clears the input field after successfutl push
    let input = findDOMNode(this.refs.theInput);
    let inputVal = input.value;
    if ('' !== inputVal) {
      let stringsRef = new Firebase(this.props.baseUrl + this.props.strings);
      stringsRef.push({text: inputVal}, function () {
        input.value = '';
      });
    }
  },
  resetDatabase() {
    //called on click of add-button,
    // resets the Firebase
    let input = {
      strings: {
        "-JiEPn2FMzEZldTFUmxp": {
          text: "Some text in the FIrebase"
        },
        "-JiGNoWeU_Jfjb1Q7hDk": {
          text: "Some other text..."
        }
      }
    };
    let stringsRef = new Firebase(this.props.baseUrl);
    stringsRef.set(input);
  },

  render() {
    return <Grid className="flyin-widget">
      <Row className="show-grid">
        <Col md={12}><Breadcrumbs {...this.props} /></Col>
      </Row>
      <Row className="show-grid" style={{paddingBottom:20}}>
        <Col md={12}>
          <div>
            <h1>{this.state.config.appname}</h1>
          </div>

          <div>{this.state.config.text1}</div>
        </Col>
      </Row>

      <Row className="show-grid">
        <Col md={12}>


          <div>
            <p>{this.state.config.text2}</p>
            <p>{this.state.config.text3}</p>
            <p>{this.state.config.text4}</p>
          </div>

          <div>
            <input ref="theInput" type="text"/>
            <span>&nbsp;</span>
            <Button bsStyle={this.state.config.buttonStyle}
                    className='button'
                    onClick={this.addInputString}>
              {this.state.config.buttonText}
            </Button>
            <span>&nbsp;</span>
            <Button bsStyle={this.state.config.buttonStyle}
                    className='button'
                    onClick={this.resetDatabase}>
              {this.state.config.buttonTextReset}
            </Button>
          </div>

          <div>
            <ul>
              {this.state.strings.map(function (string, key) {
                return (
                  <li key={key}>{string}</li>
                );
              })}
            </ul>
          </div>
          <Markdown2Html src="./assets/REACTFIRE.md"/>
        </Col>

      </Row>

    </Grid>;

  }
});
module.exports = ReactfireDemo;