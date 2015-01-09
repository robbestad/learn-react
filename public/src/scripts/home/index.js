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
        setInterval(function(){_actions.pollReddit();},5000);
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
                        var permalink="http://www.reddit.com/"+item.data.permalink;
                        return <div style={{marginBottom:'10px'}} key={idx}>
                            <span style={{fontSize:'12px',color:'#aaa'}} >{item.data.subreddit}</span><br/>
                            <span style={{fontSize:'18px'}} >{item.data.title}</span>
                            <br/>
                            <a href={item.data.url} target="reddit">
                            {item.data.domain}
                            </a>
                            <a style={{paddingLeft:'10px'}}  href={permalink} target="reddit">
                            Comments
                            </a>


                        </div>
                    })}
                </div>
            default:
                return <div><h1>Home</h1></div>
        }
    }
});

