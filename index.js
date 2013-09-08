//     _____ __  __    _ __                 ____  
//    / __(_) /_/ /_  (_) /_      _________/ / /__
//   / /_/ / __/ __ \/ / __/_____/ ___/ __  / //_/
//  / __/ / /_/ /_/ / / /_/_____(__  ) /_/ / ,<   
// /_/ /_/\__/_.___/_/\__/     /____/\__,_/_/|_|  
// 
// @brief: a developer friendly node.js sdk of fitbit
// @author: [turingou](http://guoyu.me)

var API = require('./api'),
    User = request('./api/user');

var Fitbit = function(params) {
    this.key = params.key;
    this.server {
        api: 'https://api.fitbit.com/',
        version: '1',
        auth: 'https://www.fitbit.com/'
    };
    // api sets
    Fitbit.prototype.user = new User(this);
    Fitbit.prototype.body = new API('body',this);
    Fitbit.prototype.activity = new API('activity',this);
    Fitbit.prototype.sleep = new API('sleep',this);
    Fitbit.prototype.heart = new API('heart',this);
    Fitbit.prototype.bp = new API('bp',this);
    Fitbit.prototype.bloodPressure = new API('bloodPressure',this);
    Fitbit.prototype.glucose = new API('glucose',this);
    Fitbit.prototype.foods = new API('foods',this);
    Fitbit.prototype.water = new API('water',this);
    Fitbit.prototype.datapoint = new API('datapoint',this);
    Fitbit.prototype.key = new API('key',this);
};

module.exports = Fitbit;