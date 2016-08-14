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
  var validated = 0;

  if ((username == "james") && (password == "one")) {
      validated = 1;
    } else {
    validated = 0;
  }

  res.send(validated.toString())

});

app.get('/createOrder', function (req,res) {
  var userId = req.param('userId');
  var pickupDateTime = req.param('pickupDateTime');
  var deliveryDateTime = req.param('deliveryDateTime');

  log = "user: " + userId + " placed an order for pickup on " + pickupDateTime + " and delivery on " + deliveryDateTime;

  console.log(log);
  res.send('Order created');

});



var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});
