#!/bin/env node
var http, director, bot, router, server, port, db, ip;

http        = require('http');
director    = require('director');
bot         = require('./bot.js');

router = new director.http.Router({
  '/'    : {
    get: ping
  },
  '/init' : {
    get:  bot.init,
    post: bot.init
  },
  '/commands' : {
    get: bot.commands
  },
  '/bot/:botRoom' : {
    get: ping,
    post: bot.respond
  },
});

server = http.createServer(function (req, res) {
  req.chunks = [];

  req.on('data', function (chunk) {
    req.chunks.push(chunk.toString());
    console.log(data);
  });

  router.dispatch(req, res, function(err) {
    res.writeHead(err.status, {"Content-Type": "text/plain"});
    res.end(err.message);
  });
});

port =  process.env.PORT || 8080;
ip = process.env.OPENSHIFT_NODEJS_IP || "0.0.0.0" || "127.0.0.1";

server.listen(port);

function ping() {
  this.res.writeHead(200);
  this.res.end("I am a robot.");
}
