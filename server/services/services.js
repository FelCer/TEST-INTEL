const axios = require('axios');

module.exports = function (config) {

    // Log-ing methods
    var log = require('./log.js')(config.server.log);

    return {
        "log": log,
        "axios": axios
    };
};