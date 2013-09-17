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
    this.key = params.key;
    this.version = '1';
    this.server = 'https://api.fitbit.com/' + this.version;
    this.authServer = 'https://www.fitbit.com/';
    Fitbit.prototype.auth = new sdk(apis.auth, {
        server: this.authServer
    });
    Fitbit.prototype.user = new sdk(apis.user, this);
    Fitbit.prototype.goal = new sdk(apis.goal, this);
    Fitbit.prototype.body = new sdk(apis.body, this);
    Fitbit.prototype.activity = new sdk(apis.activity, this);
    Fitbit.prototype.sleep = new sdk(apis.sleep, this);
    Fitbit.prototype.heart = new sdk(apis.heart, this);
    Fitbit.prototype.bp = new sdk(apis.bp, this);
    Fitbit.prototype.glucose = new sdk(apis.glucose, this);
    Fitbit.prototype.foods = new sdk(apis.foods, this);
    Fitbit.prototype.water = new sdk(apis.water, this);
};

module.exports = Fitbit;