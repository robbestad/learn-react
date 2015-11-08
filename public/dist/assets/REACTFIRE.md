### code as used in the example

       let React = require('react'),
           Breadcrumbs = require('react-breadcrumbs'),
           Firebase = require('firebase'),
           ReactFireMixin = require('reactfire'),
           ReactBootstrap = require('react-bootstrap'),
           Button = ReactBootstrap.Button;

       let ReactfireDemo = React.createClass({

           displayName: 'Firebase and Reactfire Example',

           mixins: [ReactFireMixin],

           getDefaultProps() {
               //some default props
               return {
                   baseUrl: 'https://reactfire-demo.firebaseio.com/',
                   strings: 'strings'
               }
           },

           getInitialState() {
               //set the initial state attributes
               return {
                   config: {
                       buttonStyle: 'info',
                       buttonText: 'add',
                       appname: 'Firebase and Reactfire Example',
                       text1: 'Demonstrates the use of ReactFire, a convenience library for one-way data binding to a Firebase. Also uses standard Firebase API in order to populate the Firebase.',
                       text2: 'Add some text to the Firebase, and watch as it is immediately displayed below.',
                       text3: 'The database will be reset periodically.'
                   },
                   strings: []
               }
           },

           componentWillMount() {
               //create the Firebase refs adn set the state strings array
               let stringsRef = new Firebase(this.props.baseUrl + this.props.strings);
               this.bindAsArray(stringsRef, 'strings');
           },

           addInputString() {
               //called on click of add-button,
               // gets the text from the input field,
               // pushes it to the Firebase
               // clears the input field after successfutl push
               let input = this.refs.theInput.getDOMNode();
               let inputVal = input.value;
               if ('' != inputVal) {
                   let stringsRef = new Firebase(this.props.baseUrl + this.props.strings);
                   stringsRef.push({'text': inputVal}, function () {
                       input.value = '';
                   });
               }
           },

           render() {
               return <div>
                   <Breadcrumbs />
                   <div className="flyin-widget">

                       <div>
                           <h1>{this.state.config.appname}</h1>
                       </div>

                       <div>{this.state.config.text1}</div>

                       <br/>

                       <div>
                           <p>{this.state.config.text2}</p>
                           <p>{this.state.config.text3}</p>
                           <p>{this.state.config.text4}</p>
                       </div>

                       <div>
                           <input ref="theInput" type="text" />
                           <span>&nbsp;</span>
                           <Button bsStyle={this.state.config.buttonStyle}
                               className='button'
                               onClick={this.addInputString}>
                                   {this.state.config.buttonText}
                           </Button>
                       </div>

                       <div>
                           <ul>
                               {this.state.strings.map(function (string, key) {
                                   return (
                                       <li key={key}>{string}</li>
                                   )
                               })}
                           </ul>
                       </div>
                   </div>
               </div>
           }
       });
       module.exports = ReactfireDemo;

###More
Read more about [Firebase](https://www.firebase.com/docs/) and [ReactFire](https://www.firebase.com/docs/web/libraries/react/)
