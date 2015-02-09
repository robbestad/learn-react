var Reflux = require('reflux'),
    actions = require('./actions'),
    $ = require("jquery");

// Some constants for determining state; will be exported on store too
var STATE_LOADING = 'loading',
    STATE_OK = 'ok',
    STATE_ERR = 'err';

// Create a private variable to store the store's state
var store = {
    state: STATE_LOADING
};

// Export a new Reflux store
module.exports = Reflux.createStore({
    // Constants for marking state of store
    STATE_LOADING: STATE_LOADING,
    STATE_OK: STATE_OK,
    STATE_ERR: STATE_ERR,

    // Hook up the store to the actions in `actions.js`
    listenables: actions,

    // Add some getters
    getData: function(){
        return store;
    },

    // Pull posts from server and trigger to let listeners know
    // posts changed
    updateFromServer: function(){
        $.get('http://www.reddit.com/new/.json')
            .done(function(data){
                store = {
                    state: STATE_OK,
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
                this.trigger(store);
            }.bind(this));
    },

    // Simply reload posts on init
    init: function(){
        this.reloadPosts();
    },

    // Delete a post based on ID.
    // TODO Handle ID not found; currently does nothing
    deletePost: function(postId){
        console.log("clicked me");
        store.posts = store.posts.filter(function(post){
            return post.id !== postId;
        });
        this.trigger(store);
    },
    // Set default data, put into loading state, kick off posts fetch from
    // server, and let listeners know
    reloadPosts: function(){
        store = {
            state: STATE_LOADING,
            posts: []
        };
        this.trigger(store);
        this.updateFromServer();
    },
    // Set default data, put into loading state, kick off posts fetch from
    // server, and let listeners know
    pollReddit: function(){
        this.updateFromServer();
    }
});
