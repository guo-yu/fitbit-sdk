//     _____ __  __    _ __                 ____  
//    / __(_) /_/ /_  (_) /_      _________/ / /__
//   / /_/ / __/ __ \/ / __/_____/ ___/ __  / //_/
//  / __/ / /_/ /_/ / / /_/_____(__  ) /_/ / ,<   
// /_/ /_/\__/_.___/_/\__/     /____/\__,_/_/|_|  
// 
// @brief: a developer friendly node.js sdk of fitbit
// @author: [turingou](http://guoyu.me)

var sdk = require('sdk'),
    apis = require('./apis');

var Fitbit = function(params) {
    var oauth = this;
    this.key = params.key;
    this.version = '1';
    this.server = 'https://api.fitbit.com/' + this.version;
    oauth.server = 'http://www.fitbit.com';
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

module.exports = Fitbit;