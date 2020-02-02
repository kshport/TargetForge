const controllers = require('./controllers/controllers');
const routes = require('./routes');

const router = {
  // proxies
  [routes.ROUTE_PROXIES_CREATE]: proxy => controllers.ProxiesController.create(proxy),
  [routes.ROUTE_PROXIES_LIST]: () => controllers.ProxiesController.list(),
};

module.exports = router;
