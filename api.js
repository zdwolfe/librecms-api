var express = require('express');
var mongoose = require('mongoose');

mongoose.connect(process.env.LIBRECMS_MONGO_URI);
var schemata = require('./schemata');

var app = express();
app.configure(function () {
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
  app.use(function(req, res, next){
    console.log('request %s %s', req.method, req.url);
    next();
  });
});

var routes = require('./routes');
routes.init(app);

var port = process.env.LIBRECMS_API_PORT || process.env.PORT || 3030;
app.listen(port);
console.log('API started on port ' + port);
