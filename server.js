/* Configuration project */
var config = require('./server/config/config');

// Services (libraries, utils, etc.)
var servs = require('./server/services/services.js')(config);

/* Templating system */
var express = require('express');

/* Cookies and body parser */
var bodyParser = require('body-parser');
/* Http server */
var http = require('http');

var app = express();
var server = http.createServer(app);
var cors = require('cors');

app.enable('trust proxy');

app.set('view cache', true);

// Enable page 'etag' for caching
app.enable('etag');
app.set('etag', 'weak');

app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true,
    //limit: '10mb'
}));
app.use(bodyParser.json({
    limit: '10mb'
}));

app.engine('html', require('ejs').renderFile);

app.use(express.static(__dirname + '/public'));
app.use('/modules', express.static(__dirname + '/node_modules/'));

const port = 8880;

require("./server/routes/routes.js")(app, servs, config);

server.listen(port, () => {
    console.log(`NodeJS version: ${process.version}`);
    console.log(`Open run project http://localhost:${port}`);
});