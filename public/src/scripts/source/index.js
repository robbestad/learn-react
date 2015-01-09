var React = require("react");
var Markdown2Html = require("react-markdown-to-html");
module.exports = React.createClass({
   render:function():any{
       return <div>
           <Markdown2Html src="assets/README.md" />
       </div>
   }
});