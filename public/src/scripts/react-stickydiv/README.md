# Sticky Div

[React][1] Component that sets a div (or any HTML element) sticky when it's scrolled beyond view.

Demo at [https://stickydivdemo.herokuapp.com/#/][2]

## Installation

    % npm install react-stickydiv --save

## Usage


#### With JSX

    var StickyDiv = require('react-stickydiv');

    MyComponent = React.createClass({
      render: function() {
         return (
           <StickyDiv>
           	 I'm Sticky
           </StickyDiv>
        );
      }
    });

#### Without JSX

      var MyComponent = React.createClass({
          render: function() {
              return React.createElement(StickyDiv, null, React.createElement("div", null, "I'm Sticky"));
          }
      });

[1]: https://facebook.github.io/react
[2]: http://www.robbestad.com/stickydiv
[3]: https://github.com/svenanders/react-stickydiv/issues/1
[4]: https://gist.github.com/z5h/d95304d8d8e1fb6d0619
