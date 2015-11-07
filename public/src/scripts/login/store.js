'use strict';
let McFly = require("mcfly");
let Flux = new McFly();
let Ajax = require("../mixins/ajax");
let loggedIn = loggedIn || false;
let lastError = lastError || false;

const apiUrl="https://morning-forest-9780.herokuapp.com";

function setLoggedIn() {
    loggedIn = true;
}

function setLastError(lastErr) {
    lastError = lastErr;
}

var LoginStore = Flux.createStore({
    getRefreshToken: () => {
        return 'undefined' !== typeof localStorage.getItem('auth.refresh_token') ?
            (localStorage.getItem('auth.refresh_token')) : false;
    },
    isAuthenticated: () => {
        return loggedIn;
    },
    login: () => {
        return loggedIn;
    }
}, function (payload) {
    if (payload.actionType === "LOGIN") {

        let userName=payload.userName;
        let passWord=payload.passWord;
        let refresh_token = LoginStore.getRefreshToken();
        let refresh_ok = false;

        if(null !== refresh_token && "undefined" !== refresh_token){

        Ajax.post({
            url: apiUrl+'/oauth',
            data: {
                grant_type: "refresh_token",
                refresh_token: refresh_token,
                client_id: "testclient",
                client_secret: "testpass"
            },
            failure: function (err) {
                setLastError(err);
                LoginStore.emitChange();

            },
            success: function (res) {

                if (res.token_type === "Bearer") {
                    setLoggedIn();
                    refresh_ok = true;
                    localStorage.setItem('auth.access_token', res.access_token);
                    localStorage.setItem('auth.expires_in', res.expires_in);
                    localStorage.setItem('auth.refresh_token', res.refresh_token);
                }
                LoginStore.emitChange();

            }
        });
        }
        if (!refresh_ok) {

            Ajax.post({
                url: apiUrl+'/oauth',
                data: {
                    grant_type: "password",
                    username: userName.toString(),
                    password: passWord.toString(),
                    client_id: "testclient",
                    client_secret: "testpass"
                },
                failure: function (err) {
                    setLastError(err);
                    LoginStore.emitChange();

                },
                success: function (res) {
                    if (res.token_type === "Bearer") {
                        setLoggedIn();
                        localStorage.setItem('auth.access_token', res.access_token);
                        localStorage.setItem('auth.expires_in', res.expires_in);
                        localStorage.setItem('auth.refresh_token', res.refresh_token);
                    }
                    LoginStore.emitChange();

                }
            });
        }

    }
});
module.exports = LoginStore;