'use strict';

var update = require('react-addons-update');

var State = {
    init: function () {
        this.state = this.getInitialState();
    },

    setState: function (state) {
        this.state = update(this.state, {$merge: state});
        this.trigger(state);
    }
};


module.exports = State;
