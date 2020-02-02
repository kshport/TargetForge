let controllers = {};
['ProxiesController', 'AccountsController'].forEach(name => {
    controllers[name] = require(`./${name}`);
});

console.log('Combined controllers:', Object.keys(controllers).join(', '));

module.exports = controllers;
