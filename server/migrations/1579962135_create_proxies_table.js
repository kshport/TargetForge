module.exports = function migration1579962135() {
    this.createTable('proxies', function() {
        this.string('ip', { not_null: true });
        this.string('port', { not_null: true });
        this.string('login');
        this.string('password');
    });
};
