'use strict';

var Reflux = require('reflux');

// Create a Reflux actions object with basic actions for reloading posts
// and deleting a post
var actions = Reflux.createActions([
    'pollReddit'
]);

//// Force deletePosts to take a single argument
//actions.deletePost.shouldEmit = function(postId){
//    var isValidId = typeof postId === 'number';
//    if(!isValidId)
//        console.error('reflux-example:deletePost action must be called with a number for the post ID to be deleted.');
//    return isValidId;
//};

// Export the actions
module.exports = actions;
