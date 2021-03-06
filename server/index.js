'use strict'
const express = require('express');
const path = require('path');
const api = require('./api/api');
const app = express();
const port = process.env.PORT || 8010;

require('./helpers');
require('./middleware')(app, express);

app.use('/api', api);

app.get('*', function(req, res) {
  res.redirect('/');
});

app.listen(port, function() {
  console.log('listening on port ' + port);
});
