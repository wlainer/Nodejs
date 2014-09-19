var http = require('http');
var express = require('express');
//var namespace = require('express-namespace');
var resource = require('express-resource');
var fs = require('fs');
var app = express();

var iniparser = require('iniparser');
var config = iniparser.parseSync('./config.ini');

app.use(app.router);

app.resource('users', require('./handlers/users.js'));
app.locals.pretty = true;
//var routes = require('./routes')(app);
/**
app.namespace('/articles', function() {
    app.get('/', function(req, res) {
        res.send('index of articles');
    });

    app.get('/new', function(req, res) {
        res.send('new article');
    });

    app.get('/edit/:id', function(req, res) {
        res.send('edit article '+ req.params.id);
    });

    app.get('/delete/:id', function(req, res) {
        res.send('delete article ' + req.params.id);
    });

    app.get('/2013', function(req, res) {
        res.send('articles from 2013');
    });

        app.namespace('/2013/jan', function() {
            app.get('/', function(req, res) {
                res.send('articles from jan 2013');
            });

            app.get('/nodejs', function(req, res) {
                res.send('articles about node from jan 2013');
            });
        });
});
*/

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