var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 9001));

app.get('/', function(req, res) {
	res.send('yo yo yo what is tha scenario');
});

app.listen(app.get('port'), function() {
	console.log('Node app is running on port', app.get('port'));
});
