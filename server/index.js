var express = require('express');
var app = express();
var router = require('./routes.js');
var db = require('./db');
var path = require('path');

var port = 3000;

// use middleware here


//possibly change endpoint
app.use('/api', router);
app.use(express.static(__dirname + '/../mysrc'));


// redirect any requests that aren't to the db or static
// to client index.html and have react router handle them
// app.get('*', function(req, res) {
//   res.sendFile(path.join(__dirname, '../mysrc', 'index.html'));
// });

app.listen(port, function() {
  console.log('Listening on port: ' + port);
});
