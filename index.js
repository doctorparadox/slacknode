var express = require('express');
var app = express();
var url = require('url');
var request = require('request');

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', (process.env.PORT || 9001));

app.get('/', function(req, res) {
	res.send('yo yo yo what is tha scenario');
});

app.listen(app.get('port'), function() {
	console.log('Node app is running on port', app.get('port'));
});
