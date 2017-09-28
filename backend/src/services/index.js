const marketslist = require('./marketslist/marketslist.service.js');
const charts = require('./charts/charts.service.js');
const orders = require('./orders/orders.service.js');
const tradeHistory = require('./trade-history/trade-history.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(marketslist);
  app.configure(charts);
  app.configure(orders);
  app.configure(tradeHistory);
};
