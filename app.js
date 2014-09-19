var http = require('http');
var express = require('express');
var namespace = require('express-namespace');
var fs = require('fs');
var app = express();

var iniparser = require('iniparser');
var config = iniparser.parseSync('./config.ini');

app.use(app.router);

var routes = require('./routes')(app);

app.set('view engine', 'jade');
app.set('views', './views');

app.use(express.logger({
    format: 'tiny',
    stream: fs.createWriteStream('app.log', {"flags": "w"})
}));
app.use(express.static('./public'));
app.use(express.responseTime());
app.use(express.errorHandler());

/**
app.get('/',
    function(req, res, next) {
        res.set('X-One', 'hey!');
        next();
    },
    function(req, res, next) {
        res.set('X-Two', 'ho!');
        next();
    },
    function(req, res) {
        res.send('Let´s go!');
    }
);
*/

/**
var one = function(req, res, next) {
    res.set('X-One', 'hey');
    next();
};

var two = function(req, res, next) {
    res.set('X-Two', 'ho!');
    next();
};

app.get('/', [one, two], function(req, res) {
    res.send("Let's go!");
});
*/


/**
app.get('/', function(req, res) {
    res.render('index', {title: config.title, message:config.message});
});
*/

http.createServer(app).listen(config.port, function() {
    console.log('App started on port ' + config.port);
});