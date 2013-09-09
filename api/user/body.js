var api = require('beer'),
    profile = require('./user/profile'),
    body = require('./user/body');

var User = function(params) {
    if (params) this.parent = params;
    User.prototype.profile = new profile(this.parent);
    User.prototype.body = new body(this.parent);
    User.prototype.activity = new activity(this.parent);
    User.prototype.sleep = new sleep(this.parent);
    User.prototype.heart = new heart(this.parent);
    User.prototype.bp = new bp(this.parent);
    User.prototype.glucose = new glucose(this.parent);
    User.prototype.foods = new foods(this.parent);
    User.prototype.water = new water(this.parent);
}

module.exports = User;