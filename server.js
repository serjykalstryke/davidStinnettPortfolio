var dotenv = require('dotenv').config();

//Set up the server to use mySQL locally & Jaws once deployed
var Sequelize = require('sequelize'),
  connection;
if (process.env.JAWSDB_URL) {
  connection = new Sequelize(process.env.JAWSDB_URL);
} else {
  connection = new Sequelize('portfolio_db', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    port: '4200'
  })
}

var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var session = require('express-session');
var moment = require('moment');

var app = express();
require('./config/passportConfig.js')(passport);


app.use(express.static("public"));

app.use(cookieParser()); //read cookies

app.use(bodyParser.urlencoded({ //read data from forms
  extended: false
}));

var exphbs = require('express-handlebars'); //for templating

app.set('view engine', 'handlebars');

app.engine('handlebars', exphbs({
  defaultLayout: 'main',
  helpers: {
    'formatdate': function (datetime, format) {
      if (moment) {
        return moment(datetime).format("DD MMMM - YYYY");
      } else {
        return datetime;
      }
    },
    'limittext': function (data) {
      data = decodeURIComponent(data);
      return data.substring(0, 400) + "...";
    },
    'decodeSummernote': function (data) {
      return data = decodeURIComponent(data);
    }
  }
}));

require('./config/passportConfig.js');

//Passport configuration
app.use(session({
  secret: 'Davidtest', // session secret
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions


//Routes
var routes = require('./controllers/route_controller.js');
app.use('/', routes);

//Launch
var PORT = process.env.PORT || 3306;
// app.listen(process.env.PORT || PORT);

const db = require("./models")
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
