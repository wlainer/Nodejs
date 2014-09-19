var routes = require('./handlers');
var user = require('./handlers/users');

module.exports = function(app) {

	//Define tje routes
	app.get('/', routes.index);
	app.get('/users', user.list);
};


/**
module.exports = function(app) {
	app.get('/', function(req, res) {
		res.send('Welcome!');
	});

	app.get('/hello.txt', function(req, res) {
		res.send('Hola!');
	});

	app.get('/contact', function(req, res) {
		res.render('contact');
	});
};
*/