/* eslint-disable no-unused-vars */
const request = require('request-promise');

const makeRequest = request.defaults({
  baseUrl: 'https://poloniex.com',
  json: true
});

class Service {
  constructor (options) {
    this.options = options || {};
  }

  find (params) {
    return Promise.resolve([]);
  }

  get (id, params) {
    return makeRequest(`/${id}?command=${params.query.command}&currencyPair=${params.query.currencyPair}&depth=${params.query.depth}`);
  }

  create (data, params) {
    if (Array.isArray(data)) {
      return Promise.all(data.map(current => this.create(current)));
    }

    return Promise.resolve(data);
  }

  update (id, data, params) {
    return Promise.resolve(data);
  }

  patch (id, data, params) {
    return Promise.resolve(data);
  }

  remove (id, params) {
    return Promise.resolve({ id });
  }
}

module.exports = function (options) {
  return new Service(options);
};

module.exports.Service = Service;
