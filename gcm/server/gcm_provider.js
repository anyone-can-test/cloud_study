var gcm = require('node-gcm');
var fs = require('fs');

var message = new gcm.Message();

var message = new gcm.Message({
    collapseKey: 'demo',
    delayWhileIdle: true,
    timeToLive: 3,
    data: {
        title: 'saltfactory GCM demo',
        message: 'Google Cloud Messaging test',
        custom_key1: 'custom data1',
        custom_key2: 'custom data2'
    }
});

var server_api_key = "AIzaSyA4tnSSLv3R5ARY_aiyqpMO6a2vqBWWACk";
var sender = new gcm.Sender(server_api_key);
var registrationIds = [];

var token = "cOCtXINma2k:APA91bETWaanbWae2-kRJgbzOvDuzIYywERSvjB_0pREFkJEycB8cOo9OFV4LUL3cUfUeVKQb-75WLpUIzhLpSBLJrVyXZpl7cCR6hMmZp-oqOE8DVWPgxY_k4f9BNMqSjzGnfOneZGj";
registrationIds.push(token);

sender.send(message, registrationIds, 4, function (err, result) {
    console.log(result);
});