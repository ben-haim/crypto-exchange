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
    get: [hook=> {
      const data = hook.result
      const result = {}
      for(let value in data) {
        if(Array.isArray(data[value])) {
          result[value] = data[value].map(item => {
            item.push(item[0]*item[1])
            return item.map(el=> numberFormatter(el))})
        } else {
            result[value] = data[value]
        }

      }
      hookUtil.replaceItems(hook, result)
  }
    ],
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
