var API = require('../index');

var Profile = function(master) {
    Profile.prototype.read = new API(master);
    Profile.prototype.update = new API(master);
}

module.exports = Profile;