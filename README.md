AJAX (Asynchronous JavaScript and XML)
	XML has been replaced with JavaScript Object Notation (JSON)
	Make an http request from the browser without a page refresh
	XMLHttpRequest

	Client-side scripts included in Jade on the server, but render on the Client

	Ajax requests

		Must be on same domain
			LOOKUP
				JSONP
				Cross-domain requests
		
		Not for API's
			Used to render your own data, between your Server and Client
			API's exchange content and requests between your Server and the API provider's Server.
		
		Callback with jQuery 
			Req, Res
			The Response is the data (i.e. the body of the html)
			jQuery is being used via the /Public folder in main.js
			You can send back anything, although you should always send JSON
	
	Express
		if GET: query string (req.query)
		if POST: (req.body)

	LOOKUP
		cachebuster