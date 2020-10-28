module.exports = (app, servs, config) => {
    require('./v1/img.js')(app, servs, config);
};