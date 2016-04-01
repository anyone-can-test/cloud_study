#!/usr/bin/env node

var amqp = require('amqplib/callback_api');

var url = 'amqp://dfqthjpo:tNsLXqKfQmqpzwgYXtoxsLZIrYbYqod9@white-mynah-bird.rmq.cloudamqp.com/dfqthjpo';


amqp.connect(url, function(err, conn) {
  conn.createChannel(function(err, ch) {
    var q = 'hello';
    var msg = "Hello World";

    ch.assertQueue(q, {durable: false});

    ch.sendToQueue(q, new Buffer('Hello World!'));
    console.log(" [x] Sent 'Hello World!'");

    setTimeout(function() { conn.close(); process.exit(0) }, 500);

  });
});

