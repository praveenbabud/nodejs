var express = require('express');
var app = express();

var port = process.env.PORT || 1337;

app.listen(port, function(err){
    console.log('running server on port ' + port);
});

console.log("Hello");

app.get('/', function(req, res){
    res.send('Hello World');
});

app.get('/books', function(req, res){
    res.send('Hello World Books');
});
