var React = require("react");
var Markdown2Html = require("react-markdown-to-html");
var Breadcrumbs = require('react-breadcrumbs');


module.exports = React.createClass({
    displayName:"Source",

    render:function():any{
       return <div>
           <Breadcrumbs />

           <Markdown2Html src="assets/README.md" />
       </div>
   }
});