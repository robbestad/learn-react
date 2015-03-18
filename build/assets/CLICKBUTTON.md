# Click a button


    /**
     * Click a button class
     * @flow
     */

    var React = require("react");

    module.exports = React.createClass({
        getInitialState: function (): any {
            return {
                buttonText: "Not clicked",
                buttonClicked: 0,
                buttonStyle:'info'
            };
        },

        onClick: function (): any {
            this.state.buttonClicked ?
                this.setState({buttonText: "Not clicked",
                    buttonClicked: 0, buttonStyle:'info'}) :
                this.setState({buttonText: "Clicked me",
                    buttonClicked: 1, buttonStyle:'success'});
        },


        render: function ():any {
            return <div>
                <h1>Button</h1>
                 <p>
                    <Button bsStyle={this.state.buttonStyle}
                      className="button"
                      onClick={this.onClick}>
                      <span className="buttonStatus">{this.state.buttonText}</span>
                    </Button>
                </p>

            </div>
        }
    });

