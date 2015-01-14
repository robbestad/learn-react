/**
 * Home class
 * @flow
 */

var React = require("react"),
    Reflux = require('reflux'),
    store = require('./store'),
    actions = require('./actions');
var Breadcrumbs = require('react-breadcrumbs');

var Thumbnail= React.createClass({
    render: function():any {
        return <div className="col-md-2 col-sm-4" style={{width:'85px'}}>
        <img src={this.props.img} style={{width: '75px', height: '65px', paddingTop:'15px'}} />
        </div>
    }
});


module.exports = React.createClass({
    displayName:"Reflux",

    mixins: [Reflux.connect(store, 'store')],

    // Pull initial state from store
    getInitialState: function ():any {
        return {
            store: store.getData()
        };
    },
    componentDidMount: function ():any {
        var _actions = actions;
        setInterval(function () {
            _actions.pollReddit();
        }, 5000);
    },

    render: function ():any {
        if ("undefined" == typeof this.state.store) {
            return <div>
                <Breadcrumbs />

                <h1>Reflux Example</h1>
            </div>
        }

        switch (this.state.store.state) {
            case store.STATE_OK:
                return <div>
                    <Breadcrumbs />

                    <h1>Reflux Example</h1>
                    <h4>This componenent uses Reflux to populate a datastore with
                        new posts on Reddit</h4>
                    {this.state.store.posts.data.children.map(function (item, idx) {
                        var permalink = "http://www.reddit.com/" + item.data.permalink;
                        var thumbnail=false;
                        if(item.data.thumbnail.match('http')) thumbnail=true;

                        return <div className="row" key={idx} style={{marginBottom:'10px'}}>
                            { thumbnail ? <Thumbnail img={item.data.thumbnail}/> : '' }
                            <div className={ thumbnail ? "col-md-10 col-sm-8": "col-md-12 col-sm-12" }>
                                <span style={{fontSize: '12px', color: '#aaa'}} >{item.data.subreddit}</span>
                                <br/>
                                <span style={{fontSize: '18px'}} >{item.data.title}</span>
                                <br/>
                                <a href={item.data.url} target="reddit">
                            {item.data.domain}
                                </a>
                                <a style={{paddingLeft: '10px'}}  href={permalink} target="reddit">
                                    Comments
                                </a>
                            </div>
                        </div>
                    })}
                </div>
            default:
                return <div>
                    <h1>Reflux Example</h1>
                </div>
        }
    }
});