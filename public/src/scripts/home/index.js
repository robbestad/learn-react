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
    componentDidMount: function(){
        let x = [0,1,2];
        x.map(x => console.log(x * x)); //arrow function
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
    render():any {
        return <div >
            <Breadcrumbs />
            <div className="flyin-widget">
                <h1>Home</h1>

            <p>
            Welcome to my collection of React examples, modules and tutorials. More will be coming
                every now and then, so be sure to bookmark and come back.
            </p>


        </div>
        </div>
    }

});

//
//<h3 >Editable test</h3>
//<input type="button" value="Edit" onClick={this.onClick} />
//<Editable editable={this.state.editable}
//    html="<b>H</b>el<b>lo </b><i><b>W</b>or<b>l</b>d<b>!</b></i>"
//    ref="editable" onChange={this.onChange} />

//<Editable editable={this.state.editable}
//    html="<b>H</b>el<b>lo </b><i><b>W</b>or<b>l</b>d<b>!</b></i>"
//    ref="editable" onChange={this.onChange} />
//<Editable editable={this.state.editable}
//html="<b>H</b>el<b/b>d<b>!</b></i>"
//ref="editable2" onChange={this.onChange} />
