const controllers = require('./controllers/controllers');
const Routes = require('./routes');

const router = {
  // proxies
  [Routes.ROUTE_PROXIES_CREATE]: proxy => controllers.ProxiesController.create(proxy),
  [Routes.ROUTE_PROXIES_LIST]: () => controllers.ProxiesController.list(),
};

module.exports = router;
