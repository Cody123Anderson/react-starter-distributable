var express = require('express');
var app = express();
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');

var settings = require('./config/settings');
var routes = require('./routes/index');

//Load settings into node environment
settings.loadEnv(process.env);

app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(express.static('dist'));
app.use(bodyParser.json({limit: '16mb'})); //increases max file size
app.use(bodyParser.urlencoded({limit: '16mb', extended: true})); //increases max file size

app.set('views', './views');
app.set('view engine', 'ejs');

var port = process.env.PORT || 4000;

routes(app);

// have it listen on 8080
app.listen(port, (err) => {
  console.warn('Running server on port: ' + port);
  if (err) console.error('Error starting server: ' + err);
});
