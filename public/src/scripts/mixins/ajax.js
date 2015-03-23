'use strict';

var request = require('superagent-promise');

module.exports = {
    get(args) {
        request('GET', args.url)
            .end()
            .then(function (res) {
                return args.success(JSON.parse(res.text));
            }, function (err) {
                return args.failure(JSON.parse(err));
            });

    },
    post(args) {
        request('POST', args.url)
            .send(args.data)
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .end()
            .then(function (res) {
                return args.success(JSON.parse(res.text));
            }, function (err) {
                return args.failure(JSON.parse(err));
            });

    }
};
