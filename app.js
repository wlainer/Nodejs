var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, '/public')));
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'jade');

app.get('/hello.txt', function(req, res) {
    res.send('Hello World');
});

app.get('/', function(req, res) {
    res.render('index', {title: 'Hey', message: 'Hello there!'});
});

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
})