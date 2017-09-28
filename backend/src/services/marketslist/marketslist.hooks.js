const hookUtil = require('feathers-hooks-common');
const numberFormatter = require('../../helpers');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [hook => {
      const items = hookUtil.getItems(hook);
      const result = Object.keys(items).map(item=> {
        const namesArr = item.split('_')
        let formatPercent = Math.round(items[item].percentChange*1000)/100
        return Object.assign(
          items[item],
          {pair: item},
          {market: namesArr[0]},
          {coin: namesArr[1]},
          {percentChange: formatPercent},
          {baseVolume: numberFormatter(items[item].baseVolume)},
          {last: numberFormatter(items[item].last)},
          {high24hr: numberFormatter(items[item].high24hr)},
          {low24hr: numberFormatter(items[item].low24hr)} )
        })
        hookUtil.replaceItems(hook, result)
    }],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
