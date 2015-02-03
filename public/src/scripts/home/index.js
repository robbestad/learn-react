var React = require("react");
//var Static = require("../static").componentName;
//console.log(Static);

var Breadcrumbs = require('react-breadcrumbs');
module.exports = React.createClass({
    displayName: "Home",

    render() {
        var inlineCss={
            padding:'10px',
            lineHeight:'16px',
            color:'red'
        };
        return <div >
            <Breadcrumbs />
            <div className="flyin-widget">
                <h1 style={inlineCss}>Home</h1>
                <p>
                    Welcome to my collection of React examples, modules and tutorials. More will be coming
                    every now and then, so be sure to bookmark and come back.
                </p>



            </div>
        </div>
    }
});