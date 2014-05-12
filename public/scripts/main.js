// $(document).on('ready', function() { ... })
//shorthand below

$(function() {
	
	//1st argument: url to request
	//2nd argument: callback
		//callback gets a single argument: data (body of the http response)
		//data is the value from res.send on the server
	
	$.get('/users', function(data) {

		//create an unordered list
		var list = $('<ul>');

		//create an array of list items from the list of names
		var listItems = data.map(function(name) {
			return $('<li class="username">' + name + '</li>');
		});

		//append the list items to the unordered list
		list.append(listItems);

		//append the list to the body
		$('body').append(list);

	});

	//add a click handler for username items
	$(document).on('click', '.username', function() {
		var itemEl = $(this);

		//make a request to the server for the user's data
		//optional second argument: request data (data to send to the server)
		//if GET: query string (req.query)
		//if POST: form body (req.body)
		$.get('/user', { username: itemEl.text() }, function(data) {
			itemEl.append(' - ' + data.description);

		});
	});
});