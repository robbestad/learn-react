/** McFly */
let McFly = require("mcfly"),
    React = require("react"),
    Flux = new McFly(),
    {Bootstrap, Grid, Col, Row, Button} = require('react-bootstrap'),
    {Link} = require('react-router'),
    Markdown2Html = require("../react-markdown-to-html"),
    Breadcrumbs = require('react-breadcrumbs');

/** Store */
var ApiStore = require("./store");

/** Actions */

var ApiActions = Flux.createActions({
    fetchPosts: function () {
        return {
            actionType: "FETCH_POSTS"
        }
    }
});

function getState() {
    return {
        posts: ApiStore.getPosts()
    }
}

/** Controller View */

var ApiController = React.createClass({
    mixins: [ApiStore.mixin],
    getInitialState: function () {
        return getState();
    },
    storeDidChange: function () {
        this.setState(getState());
    },
    render: function () {
        return <ApiComponent posts={this.state.posts} />;
    }
});

/** Component */

var ApiComponent = React.createClass({
    fetchPosts: function () {
        ApiActions.fetchPosts();
    },
    componentWillMount() {
        this.fetchPosts();
    },
    render: function () {
        return <Grid className="flyin-widget">
            <Row className="show-grid">
                <Col md={12}>
                    <Breadcrumbs />
                </Col>
            </Row>
            <Row className="show-grid">
                <Col md={12}>
                    This component uses McFly to populate a datastore with a JSON resource using AJAX.
                    When you go back to the home screen, note that the counter is kept in sync
                    with whatever is downloaded here.
                </Col>
            </Row>
            <Row className="show-grid ">
            {this.props.posts.map(function (item, idx) {
                //var thumbnail = false;
                //if (item.thumbnail.match('http')) thumbnail = true;
                var permalink = "http://www.reddit.com/" + item.permalink;

                return <Col key={idx} md={12} className="appear-in">
                    <span style={{fontSize: '12px', color: '#aaa'}} >{item.subreddit}</span>
                    <br/>
                    <span style={{fontSize: '18px'}} >{item.title}</span>
                    <br/>
                    <a href={item.url} target="reddit">
                            {item.domain}
                    </a>
                    <a style={{paddingLeft: '10px'}}  href={permalink} target="reddit">
                        Comments
                    </a>
                </Col>
            })}
            </Row>


        </Grid>

    }
});
module.exports = ApiController;