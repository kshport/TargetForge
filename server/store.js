const Store = require('openrecord/store/sqlite3');

const store = new Store({
    file: `${__dirname}/data/app.sqlite3`,
    models: [
        require('./models/Proxy'),
    ],
    migrations: [
        require('./migrations/1579962135_create_proxies_table'),
    ]
});

(async () => {
    await store.connect();
    await store.ready();
    console.log('database connected and ready to use');
})();

module.exports = store;
