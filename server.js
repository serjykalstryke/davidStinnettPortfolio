var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var moment = require('moment');

var app = express();


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
