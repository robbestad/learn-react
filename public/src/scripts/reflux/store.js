'use strict';

import $ from 'jquery';

var Reflux = require('reflux'),
    State = require('./state'),
    actions = require('./actions');

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
    mixins: [State],

    // Constants for marking state of store
    STATE_LOADING: STATE_LOADING,
    STATE_OK: STATE_OK,
    STATE_ERR: STATE_ERR,

    // Hook up the store to the actions in `actions.js`
    listenables: actions,

    getInitialState: function () {
        return {
            json: []
        };
    },

    // Add some getters
    getData: function(){
        return store;
    },
    getPosts: function(){
        if('undefined' !== typeof store.posts)
            return store.posts.data.children;

        return [];
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
                //_this.setState({json:store})
            }.bind(this));
    },

    // Set default data, put into loading state, kick off posts fetch from
    // server, and let listeners know
    pollReddit: function(){
        this.updateFromServer();
    }
});
