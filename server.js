var express = require('express');
var app = express();
var fs = require('fs');

app.get('/listUsers',function (req,res) {
  fs.readFile(__dirname + "/" + "users.json",'utf8', function (err,data) {
    console.log( data );
    res.send( data );

  });
});



app.get('/validateUser',function (req,res) {
  var username = req.param('username');
  var password = req.param('password');


//  fs.readFile(__dirname + "/" + "users.json",'utf8', function (err,data) {
//    obj = JSON.parse(data);
//    validated = obj[0].username == username;
  if ((username == "james") && password == "password")) {
      validated = 1;
    } else {
    validated = 0;
  }

res.send(validated)

});


var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});
