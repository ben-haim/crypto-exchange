// Initializes the `charts` service on path `/charts`
// const createService = require('feathers-mongoose');
const createService = require('./charts.class.js');
const hooks = require('./charts.hooks');
const filters = require('./charts.filters');

module.exports = function () {
  const app = this;
  const paginate = app.get('paginate');

  const options = {
    name: 'charts',
    // Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/charts', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('charts');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
