### Mixins Example
        
        var SetIntervalMixin = {

            componentWillMount: function() {
                this.intervals = [];
            },
            setInterval: function() {
                this.intervals.push(setInterval.apply(null, arguments));
            },
            componentWillUnmount: function() {
                this.intervals.map(clearInterval);
            }
        };

        var React = require("react");

        var Mixin = React.createClass({
            displayName: "Home",
            getInitialState(){
                return{
                    seconds:0
                }
            },
            mixins:[SetIntervalMixin],
            statics: {
                increment(n) { return n + 1; }
            },
            componentDidMount() {
                this.setInterval(this.tick, 1000);
            },
            tick() {
                this.setState({seconds: Mixin.increment(this.state.seconds)});
            },
            render() {

                return <div >
                    <div className="flyin-widget">

                        <h1>Mixin</h1>
                    {this.props.name} has been running for {this.state.seconds} {this.unit} seconds

                    </div>
                </div>
            }
        });
        module.exports=Mixin;