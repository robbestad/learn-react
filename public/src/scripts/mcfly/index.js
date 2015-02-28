/** McFly */
var McFly = require("mcfly");
var React = require("react");
var $ = require("jquery");
var Flux = new McFly();

/** Store */

var _todos = [];
var store;

function addTodo(text){
    _todos.push(text);
}

var ApiStore = Flux.createStore({
    getPosts: function(){
        return _todos;
    }
}, function(payload){
    if(payload.actionType === "FETCH_POSTS") {
        $.get('http://www.reddit.com/new/.json')
            .done(function(data){
                store = {
                    posts: data
                };

            }.bind(this))
            .fail(function(err){
                store.state = STATE_ERR;
                store.error = 'Could not fetch posts from server';
                if(err.responseJSON && err.responseJSON.error){
                    store.error += ': ' + err.responseJSON.error;
                }else{
                    store.error += '.';
                }
            }.bind(this))
            .always(function(){
                addTodo(store.posts.data.children[0].data.title);
                ApiStore.emitChange();

            }.bind(this));

    }
});

/** Actions */

var ApiActions = Flux.createActions({
    fetchPosts: function(text){
        return {
            actionType: "FETCH_POSTS",
            text: text
        }
    }
});

function getState(){
    return {
        todos: ApiStore.getPosts()
    }
}

/** Controller View */

var ApiController = React.createClass({
    mixins: [ApiStore.mixin],
    getInitialState: function(){
        return getState();
    },
    storeDidChange: function() {
        this.setState(getState());
    },
    render: function() {
        return <ApiComponent todos={this.state.todos} />;
    }
});

/** Component */

var ApiComponent = React.createClass({
    fetchPosts: function(){
        ApiActions.fetchPosts('test');
    },
    render: function() {
        return (
            <div className="api_app">
                <ul className="items">
                { this.props.todos.map(function(todo, index){
                    return <li key={index}>Todo {index} {todo}</li>
                })}
                </ul>
                <button onClick={this.fetchPosts}>Fetch Next</button>
            </div>
        )
    }
});
module.exports=ApiController;