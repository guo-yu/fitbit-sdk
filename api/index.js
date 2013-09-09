var api = require('beer');

var API = function(type, master) {
    if (master) this.master = master;
    this.type = type;
}

// read data
API.prototype.read = function(params) {
    var info = this.parent,
        self = this;
    api.get(info.server + routerMap(self.type, {
        type: params.type ? params.type : 'read',
        subtype: params.subtype ? params.subtype : null
    }, params), {
        headers: {
            access_token: self.access_token
        }
    }, function(err, result) {
        cb(err, result.body);
    });
};

// fetch key
API.prototype.key = function(cb) {
    var info = this.parent,
        self = this;
    if (info.account) {
        api(info.server + 'user/apikey', {
            username: info.account.username,
            pass: info.account.pass
        }, function(err, result) {
            console.log(result.body);
            if (!err && result.body.errcode == '0') self.key = result.body.apikey;
            cb(err, result.body);
        });
    } else {
        cb('account required')
    }
};

API.prototype.add = function(device_id, cb) {
    var info = this.parent,
        self = this;
    api.post(info.server + routerMap(self.type, {
        action: 'add'
    }), {
        headers: {
            'U-ApiKey': self.key
        }
    }, function(err, result) {
        cb(err, result.body);
    });
};

API.prototype.list = function(device_id, cb) {
    var info = this.parent,
        self = this;
    api.get(info.server + routerMap(self.type, {
        action: 'list'
    }), {
        device_id: device_id,
        headers: {
            'U-ApiKey': self.key
        }
    }, function(err, result) {
        cb(err, result.body);
    });
};

API.prototype.update = function(baby) {
    var info = this.parent,
        self = this;
    api.post(info.server + routerMap(self.type, {
        action: 'update'
    }), {
        headers: {
            access_token: self.access_token
        },
        form: baby
    }, function(err, result) {
        cb(err, result.body);
    });
};

API.prototype.remove = function() {
    var info = this.parent,
        self = this;
    api.delete(info.server + routerMap(self.type, {
        action: 'remove'
    }), {
        headers: {
            'U-ApiKey': self.key
        }
    }, function(err, result) {
        cb(err, result.body);
    });
};

module.exports = API;