var https = require('https');

console.log("Required HTTPS");

var options = {
    host: 'www.example.org',
    path: '/'
};

//called by https when the request is made
var callback = function(response) {
    console.log('In response handler callback! wootwoot!');
    console.log('Response: ', response);
}

console.log('I am about to make a request!');

https.request(options, callback).end();

console.log("Made the request!");