var api = require('beer');

var API = function(type, params) {
    if (params) this.parent = params;
    this.type = type;
}

var routerMap = function(collection, params, argvs) {
    var map = {
        user: {
            read: 'user/-/profile.json',
            update: 'user/-/profile.json',
        },
        body: {
            read: 'user/-/body/date/' + argvs + '.json',
            weight: {
                read: 'user/-/body/log/weight/date/' + argvs + '.json',
                goal: 'user/-/body/log/weight/goal.json',
            },
            fat: {
                read: 'user/-/body/log/fat/date/' + argvs + '.json',
                goal: 'user/-/body/log/fat/goal.json',
            }
        },
        activity: {
            read: 'user/-/activities/date/' + argvs + '.json',
            goal: {
                daily: 'user/-/activities/goals/daily.json',
                weekly: 'user/-/activities/goals/weekly.json'
            }
        },
        sleep: {
            read: 'user/-/sleep/date/' + argvs + '.json'
        },
        heart: {
            read: 'user/-/heart/date/' + argvs + '.json'
        },
        bp: {
            read: 'user/-/bp/date/' + argvs + '.json'
        },
        glucose: {
            read: 'user/-/glucose/date/' + argvs + '.json'
        },
        foods: {
            read: 'user/-/foods/log/date/' + argvs + '.json',
            goal: 'user/-/foods/log/goal.json'
        },
        water: {
            read: 'user/-/foods/log/water/date/' + argvs + '.json'
        }
        device: {
            add: 'devices',
            list: 'devices',
            update: 'device/' + params.device_id,
            read: 'device/' + params.device_id,
            remove: 'device/' + params.device_id
        },
        sensor: {
            add: 'device' + device_id + '/sensors',
            list: 'device' + device_id + '/sensors',
            update: 'device/' + params.device_id + '/sensor/' + params.sensor_id,
            read: 'device/' + params.device_id + '/sensor/' + params.sensor_id,
            remove: 'device/' + params.device_id + '/sensor/' + params.sensor_id
        },
        datapoint: {
            add: 'device' + device_id + '/sensors/datapoints',
            update: 'device/' + params.device_id + '/sensor/' + params.sensor_id + '/datapoint/' + params.sign,
            read: 'device/' + params.device_id + '/sensor/' + params.sensor_id + '/datapoint/' + params.sign,
            remove: 'device/' + params.device_id + '/sensor/' + params.sensor_id + '/datapoint/' + params.sign
        }
    }
    if (!params.subtype) {
        return map[collection][params.type];
    } else {
        return map[collection][params.action][params.subtype];
    }
};

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