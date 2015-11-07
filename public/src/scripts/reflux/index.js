/**
 * Home class
 * @flow
 */
'use strict';

var React = require("react"),
    Reflux = require('reflux'),
    store = require('./store'),
    {Grid, Col, Row} = require('react-bootstrap'),
    PureRenderMixin = require('react-addons-pure-render-mixin'),
    actions = require('./actions');
var Breadcrumbs = require('react-breadcrumbs');

var Thumbnail = React.createClass({
    displayName:"Image",
    propTypes:{
      img: React.PropTypes.string
    },
    render: function():any {
        return <div className="col-md-2 col-sm-4" style={{width:'85px'}}>
        <img src={this.props.img} style={{width: '75px', height: '65px', paddingTop:'15px'}} />
        </div>;
    }
});

module.exports = React.createClass({
    displayName: `Reflux route`,

    mixins: [Reflux.ListenerMixin,
        PureRenderMixin],

    // Pull initial state from store
    getInitialState: function ():any {
        return {
            store: store.getData()
        };
    },
    // Pull initial state from store
    componentWillMount() {
        actions.pollReddit();
    },
    componentDidMount: function ():any {
        this.listenTo(store, this.onStoreTrigger);

        var _actions = actions;
        setInterval(function () {
            _actions.pollReddit();
        }, 2500000);
    },
    onStoreTrigger(data){
       this.setState({
           store:data
       });
    },

    render: function ():any {
        switch (this.state.store.state) {
            case store.STATE_OK:
                return <Grid className="flyin-widget">
                    <Row className="show-grid">
                        <Col md={12}>
                            <Breadcrumbs {...this.props} />
                        </Col>
                    </Row>
                    <Row className="show-grid" >
                        <Col md={12} style={{paddingBottom: 20}}>
                    <h1>Reflux Example</h1>
                    <h4 style={{color:"#aaa"}}>This componenent uses Reflux to populate a datastore with
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
                        </div>;
                    })}
                        </Col>
                    </Row>
                </Grid>;
            default:
                return <Grid className="flyin-widget">
                    <Row className="show-grid">
                        <Col md={12}>
                            <Breadcrumbs {...this.props} />
                        </Col>
                    </Row>
                    <Row className="show-grid">
                        <Col md={12}>
                            <h1>Reflux Example </h1>
                            Loading...
                    </Col>
                    </Row>
                    </Grid>;
        }
    }
});
