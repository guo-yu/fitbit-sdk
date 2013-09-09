//     _____ __  __    _ __                 ____  
//    / __(_) /_/ /_  (_) /_      _________/ / /__
//   / /_/ / __/ __ \/ / __/_____/ ___/ __  / //_/
//  / __/ / /_/ /_/ / / /_/_____(__  ) /_/ / ,<   
// /_/ /_/\__/_.___/_/\__/     /____/\__,_/_/|_|  
// 
// @brief: a developer friendly node.js sdk of fitbit
// @author: [turingou](http://guoyu.me)

var API = require('./api'),
    user = require('./api/user'),
    device = require('./api/device');

var Fitbit = function(params) {
    this.key = params.key;
    this.server {
        api: 'https://api.fitbit.com/',
        version: '1',
        auth: 'https://www.fitbit.com/'
    };
    // api sets
    Fitbit.prototype.auth = new auth(this);
    Fitbit.prototype.user = new user(this);
    Fitbit.prototype.device = new device(this);
};

Fitbit.prototype.token = function() {
    return this.token;
};

module.exports = Fitbit;