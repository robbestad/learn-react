"use strict";

var McFly = require("mcfly");
var Flux = new McFly();
var _posts = [];
var Ajax = require("../mixins/ajax");
let lastError = lastError || false;

function addPosts(data) {
    _posts = data;
}
function setLastError(lastErr) {
    lastError = lastErr;
}


var ApiStore = Flux.createStore({
    getPosts: function () {
        return _posts;
    }
}, function (payload) {
    if (payload.actionType === "FETCH_POSTS") {
        Ajax.get({
            url: 'http://www.reddit.com/new/.json',
            failure: function (err) {
                setLastError(err);
                ApiStore.emitChange();

            },
            success: function (res) {
                let data=[];
                res.data.children.map(function(item){
                    data.push(item.data);
                });
                addPosts(data);
                ApiStore.emitChange();
            }
        });


    }
});
module.exports=ApiStore;