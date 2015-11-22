var server = require('diet');
var app = server();

app.listen('127.0.0.1:3000');

app.get('/', function($){
	$.end('Hello world');
});