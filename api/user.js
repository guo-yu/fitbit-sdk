var api = require('beer');

var User = function(params) {
    if (params) this.parent = params;
}

module.exports = User;