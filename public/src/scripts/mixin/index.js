"use strict";

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
var Markdown2Html = require("react-markdown-to-html");
var Breadcrumbs = require('react-breadcrumbs');


var Mixin = React.createClass({
    displayName: "Mixin example",
    getInitialState(){
        return{
            seconds:0
        };
    },
    mixins:[SetIntervalMixin],
    statics: {
        unit:"seconds",
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
            <Breadcrumbs {...this.props} />
            <div className="flyin-widget">

                <h1>Mixin</h1>
                {this.constructor.displayName} has been running for {this.state.seconds} {Mixin.unit}
                <Markdown2Html src="assets/MIXINS.md" />


            </div>
        </div>;
    }
});
module.exports=Mixin;