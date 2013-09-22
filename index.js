//     _____ __  __    _ __                 ____  
//    / __(_) /_/ /_  (_) /_      _________/ / /__
//   / /_/ / __/ __ \/ / __/_____/ ___/ __  / //_/
//  / __/ / /_/ /_/ / / /_/_____(__  ) /_/ / ,<   
// /_/ /_/\__/_.___/_/\__/     /____/\__,_/_/|_|  
// 
// @brief: a developer friendly node.js sdk of fitbit
// @author: [turingou](http://guoyu.me)

var sdk = require('sdk'),
    author = require('author'),
    apis = require('./apis'),
    token = author.token;

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
    var oauthParams = author.oauth1({
        method: apis.token.request.method,
        url: self.oauthServer + apis.token.request.url
    },{
        oauth_callback: self.redirect,
        oauth_consumer_key: self.key,
    });
    self.token.request({
        form: oauthParams
    }, function(err, result, s) {
        if (!err) {
            if (result.body.indexOf('oauth_token') > -1 && result.body.indexOf('oauth_verifier') > -1) {
                var request_token = token.parse(result.body);
                s['request_token'] = request_token;
                res.redirect(self.oauthServer + apis.token.authPage.url + '?oauth_token=' + request_token.oauth_token);
            } else {
                next(new Error('fail to fetch request_token'));
            }
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
        var oauthParams = author.oauth1({
            method: apis.token.access.method,
            url: self.oauthServer + apis.token.access.url
        },{
            oauth_consumer_key: self.key,
            oauth_token: oauth_token,
            oauth_verifier: oauth_verifier
        });
        self.token.access({
            form: oauthParams
        }, function(err, result, s) {
            if (!err) {
                if (result.body.indexOf('encoded_user_id') > -1 && result.body.indexOf('oauth_token') > -1) {
                    var access_token = token.parse(result.body);
                    s['access_token'] = access_token;
                    res.locals.fitbit = access_token;
                }
                next();
            } else {
                next(err);
            }
        });
    } else {
        // oauth_token not given
        next();
    }
}

module.exports = Fitbit;