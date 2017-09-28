// Initializes the `tradeHistory` service on path `/trade-history`
const createService = require('./trade-history.class.js');
const hooks = require('./trade-history.hooks');
const filters = require('./trade-history.filters');

module.exports = function () {
  const app = this;
  const paginate = app.get('paginate');

  const options = {
    name: 'trade-history',
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/trade-history', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('trade-history');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
