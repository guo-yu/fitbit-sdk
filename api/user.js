var profile = require('./user/profile'),
    body = require('./user/body');

var User = function(master) {
    User.prototype.profile = new profile(master);
    User.prototype.body = new body(master);
    User.prototype.activity = new activity(master);
    User.prototype.sleep = new sleep(master);
    User.prototype.heart = new heart(master);
    User.prototype.bp = new bp(master);
    User.prototype.glucose = new glucose(master);
    User.prototype.foods = new foods(master);
    User.prototype.water = new water(master);
}

module.exports = User;