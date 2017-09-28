// Initializes the `chartlist` service on path `/chartlist`
const createService = require('./marketslist.class.js');
const hooks = require('./marketslist.hooks');
const filters = require('./marketslist.filters');

module.exports = function () {
  const app = this;
  const paginate = app.get('paginate');

  const options = {
    name: 'marketslist',
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/marketslist', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('marketslist');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
