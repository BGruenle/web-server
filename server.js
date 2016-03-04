var express = require('express');
var app = express();
var PORT = 3000;

var middleware = require('./middware');

app.use(middleware.logger);

app.get('/about',middleware.requireAuth, function (req, res) {
  res.send('About us!')
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
  console.log('express server started on port ' + PORT);
});
