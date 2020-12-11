const express = require('express');
const passport = require('passport');
const multer = require('multer');
const fs = require('fs');
const aws = require('aws-sdk');
const path = require('path');
const models = require('../models');
const transporter = require('../config/transporter.js');

const router = express.Router();
const sequelizeConnection = models.sequelize;
const upload = multer({ dest: path.join(__dirname, '/public/images/') });

// amazon S3 configuration
const S3_BUCKET = process.env.S3_BUCKET;
const S3AccessKeyId = process.env.AWS_ACCESS_KEY_ID;
const S3SecretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;


// route middleware to make sure user is verified
function isLoggedIn(req, res, next) {
  // if user is authenticated in the session, carry on
  let loginCheckAction;
  if (req.isAuthenticated()) {
    loginCheckAction = next();
  } else {
    loginCheckAction = res.redirect('/');
  }
  return loginCheckAction;
}

function sendAutomaticEmail(mailOptions) {
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error, info);
    }
  });
}

// ==================================
// =====GET routes to load pages=====
// ==================================
router.get('/', (req, res) => {
  res.redirect('/index');
});

router.get('/index', (req, res) => {
  res.render('index', { layout: 'main' });
});

router.get('/portfolio', (req, res) => {
  res.render('portfolio', { layout: "main" });
});

router.get('/contact', (req, res) => {

  res.render('contact', { layout: 'main' });
});

router.get('/aboutMe', (req, res) => {
  res.render('aboutMe', { layout: 'main' })
})

// ==================================
// ===POST route to sent messages====
// ==================================

router.post('/contact/message', (req, res) => {
  const currentDate = new Date();

  // Use Sequelize to push to DB
  models.Messages.create({
    name: req.body.fname,
    email: req.body.email,
    message: req.body.message,
    createdAt: currentDate,
    updatedAt: currentDate,
  }).then(() => {
    // Send email to alert the admin that a message was recieved
    const mailOptions = {
      from: `${req.body.email}`, // sender address
      to: 'davidstinnett@icloud.com', // list of receivers
      subject: 'Someone left you a message', // Subject line
      text: `Name: ${req.body.fname} \n Message: ${req.body.message}`,
    };

    sendAutomaticEmail(mailOptions);
    req.session.messageSent = true;

    res.redirect('../contact');
  });
});


router.post('/contact/message', (req, res) => {
  const currentDate = new Date();

  // Use Sequelize to push to DB
  models.Messages.create({
    name: req.body.fname,
    email: req.body.email,
    message: req.body.message,
    createdAt: currentDate,
    updatedAt: currentDate,
  }).then(() => {
    // Send email to alert the admin that a message was recieved
    const mailOptions = {
      from: `${req.body.email}`, // sender address
      to: 'davidstinnett@icloud.com', // list of receivers
      subject: 'Someone left you a message', // Subject line
      text: `Name: ${req.body.fname} \n Message: ${req.body.message}`,
    };

    sendAutomaticEmail(mailOptions);
    req.session.messageSent = true;

    res.redirect('../contact');
  });
});
module.exports = router;
