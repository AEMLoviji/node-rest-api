var routes = require('./company_routes');

exports.registerRoutes = function (app) {
    app.get('/', (req, res) => {
        const data = {
            info: 'REST API created by using Node.js, Express and Postgres'
        };

        res.json(data);
    })

    routes.assignRoutes(app);
}