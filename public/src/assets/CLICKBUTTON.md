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
                buttonClicked: 0
            };
        },

        onClick: function (): any {
            this.state.buttonClicked ?
                this.setState({buttonText: "Not clicked", buttonClicked: 0}) :
                this.setState({buttonText: "Clicked", buttonClicked: 1});
        },

        render: function ():any {
            return <div>
                <h1>Button</h1>
                <p>
                <input type="button" className="button"
                    value="ClickMe" onClick={this.onClick} />
                </p>
                <p>
                Status: <span className="buttonStatus">
                            {this.state.buttonText}
                        </span>
                </p>
            </div>
        }
    });

