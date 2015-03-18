  # Sticky Div

  React Component that sets a div (or any HTML element) sticky when it's scrolled beyond view.

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
