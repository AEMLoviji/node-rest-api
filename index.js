const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const routes = require('./routes/routes_container');
const config = require('./app_config.json');
const port = config.serverPort;

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

routes.registerRoutes(app);

app.listen(port, () => {
    console.log(`REST API is running on port ${port}.`);
})