const log = require('lambda-log');

// add the dymanic meta data. e.g. timestamp
log.options.dynamicMeta = function(message) {
  return {
    timestamp: new Date().toISOString(),
  };
};

// set the debug option
if (process.env.DEBUG_ENABLED && process.env.DEBUG_ENABLED === 'true') {
  log.options.debug = true;
}

exports.log = log;
