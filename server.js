const dotenv = require("dotenv").config();

const Sequelize = require("sequelize")
if (process.env.JAWSDB_URL) {
  const connection = new Sequelize(process.env.JAWSDB_URL);
} else {
  const connection = new Sequelize("portfolio_db", "root", "password", {
    host: "localhost",
    dialect: "mysql",
    port: "8080"
  })
}

const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const session = require("express-session");
const moment = require("moment");

const app = express();
require("./config/passportConfig.js")(passport);

app.use("/public", express.static(__dirname + '/public'));
app.use(cookieParser());

app.use(bodyParser.urlencoded({ //read data from forms
	extended: false
}));

const exphbs = require("express-handlebars");

app.set("view engine", "handlebars")
app.engine('handlebars', exphbs({
  defaultLayout: 'main',
  helpers: {
    'formatdate': function(datetime,format) {
      if (moment) {
        return moment(datetime).format("DD MMMM - YYYY");
      } else {
        return datetime;
      }
    },
    'limittext': function(data) {
      data = decodeURIComponent(data);
      return data.substring(0,400) + "...";
    },
    'decodeSummernote': function(data) {
      return data = decodeURIComponent(data);
    }
  }
}));

require("./config/passportConfig.js");
//Passport configuration
app.use(session({ 
  secret: 'davidtest', // session secret
  resave: true,
  saveUninitialized: true
 })); 
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

const routes = require("./controllers/controller.js")
app.use("/", routes);

const PORT = 8080
app.listen(process.env.PORT || PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});