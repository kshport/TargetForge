const Proxy = require('./../models/Proxy');

const create = async (proxy) => await Proxy.create(proxy);

const list = async () => await Proxy;

module.exports = { create, list };
