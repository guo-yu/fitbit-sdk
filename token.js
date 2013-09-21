exports.parse = function(rawString) {
    var list = rawString.split('&'),
        map = {};
    list.forEach(function(item) {
        map[item.substr(0, item.indexOf('='))] = item.substr(item.indexOf('=') + 1);
    });
    return map;
}