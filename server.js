
var connect = require('connect'),
    sharejs = require('share').server;

// XXX do we have to serve more than one page?
// i think one page (index.html) might do it, but i'm note sure.
//
var server = connect(connect.logger(), connect.static(__dirname + '/public'));

// XXX enable persistance
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

server.listen(8000, function(){
    console.log('Server running at http://127.0.0.1:8000/');
});
