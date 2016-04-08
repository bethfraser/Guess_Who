var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
var CHARACTER_JSON = path.join(__dirname, 'data/characters.json');

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.get('/api/characters', function(req, res){
  fs.readFile(CHARACTER_JSON, function(err, data){
    if(err) process.exit(1);

    res.json(JSON.parse(data));
  })
})

app.use(express.static('client/build'));


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
