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
    getInitialState: function (): any {
        return {
            store: store.getData()
        };
    },
    componentDidMount:function():any{
        var _actions=actions;
        setInterval(function(){_actions.pollReddit();},1000);
    },

    render: function (): any {
        if("undefined" == typeof this.state.store){
            return <div><h1>Home</h1></div>
        }

        switch (this.state.store.state) {
            case store.STATE_OK:
                return <div>
                    <h1>Latest posts from Reddit</h1>
                    {this.state.store.posts.data.children.map(function (item, idx) {
                        return <div style={{marginBottom:'10px'}} key={idx}>
                            <a href={item.data.url}>
                            {item.data.title}
                                </a>
                            <br/>{item.data.subreddit}
                        </div>
                    })}
                </div>
            default:
                return <div><h1>Home</h1></div>
        }
    }
});

