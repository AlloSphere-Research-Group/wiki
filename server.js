// wiki server
//

var connect = require('connect'),
    fs = require('fs'),
    sharejs = require('share').server;

// XXX maybe, eventually we want to make this live with a file-watcher
//
// server a single page
//
var indexContent = fs.readFileSync('public/index.html');
var server = connect(connect.logger(), function(request, response){
  var fun = connect.static(__dirname + '/public');
  // XXX - look at the request.
  //
  // if it starts 'wiki' then serve the index content. otherwise, serve files
  // normally.
  //
  //console.log(request);

  if (request.url.indexOf("/wiki") == -1) {
    console.log("got here");
    fun(request, response);
  }
  else {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end(indexContent);
  }
});

// XXX enable persistance
//
// we should save the contents of the ShareJS "context" at the url path. we
// could use a nosql database with the url path as the key and the ShareJS
// buffer contents as the value.
//
// See docs for options. {type: 'redis'} to enable persistance.
//
var options = {db: {type: 'none'}};

// Attach the sharejs REST and Socket.io interfaces to the server
//
sharejs.attach(server, options);

// XXX - eventually share on port 80
//
server.listen(8000, function(){
    console.log('Server running at http://127.0.0.1:8000/');
});
