var express = require('express');
var path = require('path');
var app = express();
var routes = require('./routes')(app);

app.use(express.static(path.join(__dirname, '/public')));
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'jade');

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
})