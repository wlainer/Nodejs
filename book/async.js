var broadcast = function(msg, timeout, callback) {
	setTimeout(function() {
		console.log(msg);
		callback();
	}, timeout);
};

broadcast('Is the anybody out there?', 1000, function() {
	console.log('Message sent');
});