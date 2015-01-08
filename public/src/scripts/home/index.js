/**
 * Home class
 * @flow
 */

var React = require("react"),
    Reflux = require('reflux'),
    store = require('./store'),
    actions = require('./actions');

module.exports = React.createClass({
    mixins: [Reflux.connect(store, 'store')],

    // Pull initial state from store
    getInitialState: function () {
        return {
            store: store.getData()
        };
    },

    render: function ():any {
        if("undefined" == typeof this.state.store){
            return <div><h1>Home</h1></div>
        }

        switch (this.state.store.state) {
            case store.STATE_OK:
                return <div>
                    <h1>Home</h1>
                    {this.state.store.posts.map(function (item, idx) {
                        return <div style={{marginBottom:'10px'}} key={idx}>{item.body}</div>
                    })}
                </div>
            default:
                return <div><h1>Home</h1></div>
        }
    }
});

