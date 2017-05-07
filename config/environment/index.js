'use strict';

var _ = require('lodash');

var all = {
  env: process.env.NODE_ENV || 'dev',
};

module.exports = _.merge(
  all,
  require('./shared'),
  require('./' + all.env + '.js') || {}
);