const Store = require('openrecord/store/sqlite3');

class Proxy extends Store.BaseModel {
    static definition() {
        this.validatesPresenceOf('ip', 'port', 'login', 'password');
    }

    getConfig() {
        return [this.ip, this.port, this.login, this.password].join(':');
    }
}

module.exports = Proxy;
