//     _____ __  __    _ __                 ____  
//    / __(_) /_/ /_  (_) /_      _________/ / /__
//   / /_/ / __/ __ \/ / __/_____/ ___/ __  / //_/
//  / __/ / /_/ /_/ / / /_/_____(__  ) /_/ / ,<   
// /_/ /_/\__/_.___/_/\__/     /____/\__,_/_/|_|  
// 
// @brief: a developer friendly node.js sdk of fitbit
// @author: [turingou](http://guoyu.me)

var sdk = require('sdk'),
    apis = require('./apis'),
    token = require('./token');

var Fitbit = function(params) {
    this.key = params.key ? params.key : null;
    this.redirect = params.redirect ? params.redirect : '';
    this.version = '1';
    this.server = 'https://api.fitbit.com/' + this.version;
    this.oauthServer = 'http://www.fitbit.com';
    var oauth = this;
    oauth.server = oauth.oauthServer;
    Fitbit.prototype.token = new sdk(apis.token, oauth);
    Fitbit.prototype.user = new sdk(apis.user, this);
    Fitbit.prototype.goal = new sdk(apis.goal, this);
    Fitbit.prototype.body = new sdk(apis.body, this);
    Fitbit.prototype.weight = new sdk(apis.weight, this);
    Fitbit.prototype.fat = new sdk(apis.fat, this);
    Fitbit.prototype.activity = new sdk(apis.activity, this);
    Fitbit.prototype.sleep = new sdk(apis.sleep, this);
    Fitbit.prototype.heart = new sdk(apis.heart, this);
    Fitbit.prototype.bp = new sdk(apis.bp, this);
    Fitbit.prototype.glucose = new sdk(apis.glucose, this);
    Fitbit.prototype.foods = new sdk(apis.foods, this);
    Fitbit.prototype.stat = new sdk(apis.stat, this);
    Fitbit.prototype.friend = new sdk(apis.friend, this);
    Fitbit.prototype.invite = new sdk(apis.invite, this);
    Fitbit.prototype.badge = new sdk(apis.badge, this);
    Fitbit.prototype.device = new sdk(apis.device, this);
    Fitbit.prototype.alarm = new sdk(apis.alarm, this);
    Fitbit.prototype.water = new sdk(apis.water, this);
};

// express middleware: fetch oauth token and redirect to auth page
Fitbit.prototype.auth = function(req, res, next) {
    var self = this;
    self.token.request({
        form: {
            oauth_callback: self.redirect,
            oauth_consumer_key: self.key,
            oauth_nonce: '123',
            oauth_signature: '123',
            oauth_signature_method: 'HMAC-SHA1',
            oauth_timestamp: '123',
            oauth_version: '1.0'
        }
    }, function(err, result, s) {
        if (!err) {
            var request_token = token.parse(result.body).oauth_token;
            s['request_token'] = request_token;
            res.redirect(self.oauthServer + apis.token.authPage.url + '?oauth_token=' + request_token);
        } else {
            next(err);
        }
    });
}

// express middleware: fetch access token
Fitbit.prototype.access = function(req, res, next) {
    var oauth_token = req.query.oauth_token,
        oauth_verifier = req.query.oauth_verifier,
        self = this;
    if (oauth_token && oauth_verifier) {
        self.token.access({
            form: {
                oauth_consumer_key: self.key,
                oauth_token: oauth_token,
                oauth_nonce: '123',
                oauth_signature: '123',
                oauth_signature_method: 'HMAC-SHA1',
                oauth_timestamp: '123',
                oauth_verifier: oauth_verifier,
                oauth_version: '1.0'
            }
        }, function(err, result, s) {
            if (!err) {
                var access_token = token.parse(result.body).oauth_token;
                s['access_token'] = result.body;
                res.locals['access_token'] = access_token;
                next();
            } else {
                next(err);
            }
        });
    } else {
        res.redirect('/');
    }
}

module.exports = Fitbit;