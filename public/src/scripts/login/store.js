let McFly = require("mcfly");
let Flux = new McFly();
let Ajax = require("../mixins/ajax");
let loggedIn = loggedIn || false;

function setLoggedIn() {
    loggedIn = true;
};

var LoginStore = Flux.createStore({
    getRefreshToken: () => {
        return 'undefined' !== typeof localStorage.getItem('auth.refresh_token') ?
            (localStorage.getItem('auth.refresh_token')) : false;
    },
    getLoggedIn: () => {
        return loggedIn;
    },
    login: () => {
        return loggedIn;
    }
}, function (payload) {
    if (payload.actionType === "LOGIN") {
        let refresh_token = LoginStore.getRefreshToken();
        let refresh_ok = false;
        if(null !== refresh_token){
        Ajax.post({
            url: 'http://morning-forest-9780.herokuapp.com/oauth',
            data: {
                "grant_type": "refresh_token",
                "refresh_token": refresh_token,
                "client_id": "testclient",
                "client_secret": "testpass"
            },
            failure: function (err) {
                console.log(err);

            },
            success: function (res) {
                if (res.token_type === "Bearer") {
                    setLoggedIn();
                    refresh_ok = true;
                    localStorage.setItem('auth.access_token', res.access_token);
                    localStorage.setItem('auth.expires_in', res.expires_in);
                    localStorage.setItem('auth.refresh_token', res.refresh_token);
                    LoginStore.emitChange();
                }
            }
        });
        }
        if (!refresh_ok) {
            Ajax.post({
                url: 'http://morning-forest-9780.herokuapp.com/oauth',
                data: {
                    "grant_type": "password",
                    "username": "marty",
                    "password": "testpass",
                    "client_id": "testclient",
                    "client_secret": "testpass"
                },
                failure: function (err) {
                    console.log(err);
                },
                success: function (res) {
                    if (res.token_type === "Bearer") {
                        setLoggedIn();
                        localStorage.setItem('auth.access_token', res.access_token);
                        localStorage.setItem('auth.expires_in', res.expires_in);
                        localStorage.setItem('auth.refresh_token', res.refresh_token);
                        LoginStore.emitChange();
                    }
                }
            });
        }

    }
});
module.exports = LoginStore;