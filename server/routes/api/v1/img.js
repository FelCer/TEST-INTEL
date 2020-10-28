module.exports = (app, servs, config) => {

    /* Default data*/
    app.get('/', (request, response) => {
        //Log
        servs.log.JL('routesjs.logger').debug('Get /');

        response.setHeader('Cache-Control', 'no-cache');

        const lang = (request.query.lang) ? request.query.lang : "";
        const q = (request.query.q) ? request.query.q.substring(0, 100) : "";
        const category = (request.query.category) ? request.query.category : "";

        servs.axios.get(
            config.pixabay.url +
            config.pixabay.key +
            '&' +
            'lang=' + lang +
            '&' +
            'q=' + q +
            '&' +
            'category=' + category)
            .then(rta => {
                response.statusCode = 200;
                return response.json({
                    "msg": "Images found",
                    "data": rta.data
                });
            })
            .catch(error => {
                servs.log.JL("routesjs.logger").error("Error Error finding images: " + error);
                response.statusCode = 404;
                return response.json({
                    "msg": "Error finding images",
                    "data": {}
                });
            });
    })
};