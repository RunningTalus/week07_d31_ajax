var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public')); //express default route
app.use(bodyParser());

//this is the home page
app.get('/', function(req, res) {
	res.render('index');
});

//users
app.get('/users', function(req, res) {
	//send data directly back to the user
	//Express automatically sets the content-type to "application/json" if we pass an array or object
	res.send(['steve', 'chevy', 'bill']);
});

app.get('/user', function(req, res) {
	var requestedUsername = req.query.username;

	var userDetails = {
		steve: 'Really funny and great on the banjo.',
		chevy: 'Sardonic and likes golf, na-na-na-na-na-na-nah!!!!',
		bill: 'Totally ridiculous, perished in Zombieland by pretending to be a zombie.'
	};

	//send back user details of the requested username
	//must be [] BRACKET notation, because the key we're using is indeterminate at develop-time.
		//needs to be evaluated based on the requestedUsername (dynamic)
	res.send({
		description: userDetails[requestedUsername]
	});

});

var server = app.listen(8330, function() {
	console.log('Express server listening on port ' + server.address().port);
});
