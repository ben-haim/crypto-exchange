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
      const result = []
      data.map(obj => {
        const newObj = {}
        Object.keys(obj).map(key => {
          newObj[key] = numberFormatter(obj[key])
        })
        result.push(newObj)
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
