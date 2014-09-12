// wiki server
//

var connect = require('connect'),
    fs = require('fs'),
    sharejs = require('share').server;

// use the "use" call to set handlers (see below) instead of default.
//
var server = connect();

// log all requests
//
server.use(connect.logger());

// if the path begins with '/wiki', then serve the wiki page.
//
var wikiContent = fs.readFileSync('public/wiki.html');
server.use('/wiki', function(request, response, next) {
  response.end(wikiContent);

  // we _don't_ want to pass off handling to the "next" handler.
  //
  //next();
});

// default to serving "static" pages
//
server.use(connect.static(__dirname + '/public'));

// XXX enable persistance
//
// we should save the contents of the ShareJS "context" at the url path. we
// could use a nosql database with the url path as the key and the ShareJS
// buffer contents as the value.
//
// See docs for options. {type: 'redis'} to enable persistance.
//
var options = {
  db: { type: 'none' },
  browserChannel: { cors: "*" }
};

// Attach the sharejs REST and Socket.io interfaces to the server
//
sharejs.attach(server, options);

// XXX - eventually share on port 80
//
server.listen(8000, function(){
  console.log('Server running at http://127.0.0.1:8000/');
});
