var React = require("react");
var Editable = require("../editable");
var Breadcrumbs = require('react-breadcrumbs');

module.exports = React.createClass({
    displayName:"Home",

    getInitialState: function ():any {
        return {
            editable: false
        }
    },
    onChange: function (e):any {
        //console.log(e.target.value);
        //console.log(this.refs.editable.getDOMNode().innerHTML);
    },
    componentDidUpdate: function ():any {
        if (this.state.editable) {
            this.refs.editable.getDOMNode().focus();
        }
    },
    onClick: function ():any {
        this.setState({editable: !this.state.editable});
    },

    render: function ():any {
        return <div>
            <Breadcrumbs />
            <h1>Home</h1>
            <input type="button" value="Edit" onClick={this.onClick} />
        </div>
    }

});

//<Editable editable={this.state.editable}
//    html="<b>H</b>el<b>lo </b><i><b>W</b>or<b>l</b>d<b>!</b></i>"
//    ref="editable" onChange={this.onChange} />
//<Editable editable={this.state.editable}
//html="<b>H</b>el<b/b>d<b>!</b></i>"
//ref="editable2" onChange={this.onChange} />
