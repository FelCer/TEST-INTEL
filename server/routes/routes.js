module.exports = (app, servs, config) => {
    require('./api/api.js')(app, servs, config);
};